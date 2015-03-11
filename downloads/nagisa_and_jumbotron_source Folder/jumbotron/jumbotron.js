/**
 * @fileOverview Class and its (non-event) methods for the inifinitle-looping, highly controllable "Jumbotron carousel"
 * @author Ryan Moore
 */

/**
 * Jumbotron namespace
 * @name RM.Jumbotron
 * @namespace
 */


RM.Jumbotron = {};


RM.Jumbotron.JumbotronReference = function(params) {
    this.totalSlides = params.totalSlides;
    this.currentSlideIndex = params.currentSlideIndex || 0; //this can be moved one by one or willy nilly when they click buttons
    this.name = params.name;
    this.slideData = params.slideData;
    this.htmlTargetId = params.htmlTargetId; //this tells it where on the page to create the necessary lists etc, so we don't have to worry about any of that
    this.minWidth = params.minWidth || 1000;
    this.maxWidth = params.maxWidth || 1600;
    this.isCurrentlyAnimating = false;
    this.fadeOutAnimationSpeed = params.fadeOutAnimationSpeed || 400;
    this.slideMoveAnimationSpeed = params.slideMoveAnimationSpeed || 800;
    this.currentSlideWidth; //set by the setSizeOfLis method, called on setup and resize
    this.stopAutoAdvanceFlag = false; //use for testing to stop auto-advance
    this.autoAdvanceInterval;
    this.autoAdvanceSpeed = params.autoAdvanceSpeed || 8000;
    this.isDynamicSize = (typeof params.isDynamicSize !== "undefined") ? params.isDynamicSize : false;
    this.staticWidth = params.staticWidth || null;
    this.slideTemplateName = params.slideTemplateName || 'jumbotron_slide_template';
    this.thumbnailTemplateName = params.thumbnailTemplateName || 'jumbotron_thumbnail_template';
    this.centerColumnWidth = params.centerColumnWidth || this.staticWidth;
}

RM.Jumbotron.JumbotronReference.prototype.resizeSlidesOnWindowResize = function() {
    //might possibly be some issues with resizing while in the middle of an animation, but surprisingly seems to work ok
    this.sizeAndPositionListsAndLis();
}

RM.Jumbotron.JumbotronReference.prototype.stopAutoProgress = function() {
    clearInterval(this.autoAdvanceInterval);
    this.autoAdvanceInterval = null;
}

RM.Jumbotron.JumbotronReference.prototype.startAutoProgress = function() {
    if (this.stopAutoAdvanceFlag) return false; //blocked for test state

    var parentClass = this;

    this.autoAdvanceInterval = setInterval(function() {
                                                    //console.log('auto advancing slide');
                                                    parentClass.beginAnimateToOnDeckSlide('forward');
                                                },
                                                parentClass.autoAdvanceSpeed
                                          );
}

RM.Jumbotron.JumbotronReference.prototype.resetAutoProgress = function() {
    this.stopAutoProgress();
    this.startAutoProgress();
}

RM.Jumbotron.JumbotronReference.prototype.init = function() {
    this.placeHtmlHoldersAndButtons();
    this.setUpSlidesAndThumbnails();
    //the below must come after physical (hidden) slides are on screen to work
    this.sizeAndPositionListsAndLis(); //size the items and total lists to fit the page (redo on reSize)
    this.placeInitialThreeSlides();

    //put it in storage for when we need it
    //RM.Jumbotron.jumbrotronReferenceRepository.push(this); //TODO: deprecated by putting it in Nagisa library

    this.setUpJumbotronEvents();

    var initialIndex = this.currentSlideIndex;
    this.highlightThumbnailByIndex(initialIndex);

    this.startAutoProgress();
}

RM.Jumbotron.JumbotronReference.prototype.getThumbnails = function() {
    return $('#' + this.name + '_thumbs_list li');
}

RM.Jumbotron.JumbotronReference.prototype.highlightThumbnailByIndex = function(index) {
    var $thumbs = this.getThumbnails();
    $thumbs.removeClass('highlighted');

    var $targetThumb = $thumbs.eq(index);
    $targetThumb.addClass('highlighted');
}

RM.Jumbotron.JumbotronReference.prototype.setUpSlidesAndThumbnails = function() {
    var slideData = this.slideData;
    var allSlideHtml = '';
    var thumbnailHtml = '';

    for (var i=0; i<slideData.length; i++) {
        allSlideHtml += this.createSlideHtml(slideData[i], i);
        thumbnailHtml += this.createThumbnailHtml(slideData[i], i);
    }

    //when all slide html is gathered, place it on the screen in the holder
    var $hiddenHolder = this.getHiddenList();
    $hiddenHolder.html(allSlideHtml);

    var $thumbHolder = $('#' + this.name + '_thumbs_list');
    $thumbHolder.html(thumbnailHtml);

    //give the thumbnail holder the proper width so that centering works
    var $thisThumbnailCenterer = $('#' + this.name + '_thumbnail_centerer');
    var $theseThumbLis = $thumbHolder.find('li');

    var newWidth = $theseThumbLis.outerWidth() * $theseThumbLis.length;
    $thisThumbnailCenterer.css('width', newWidth);
}

RM.Jumbotron.JumbotronReference.prototype.createThumbnailHtml = function(thumbData, index) {
    thumbData.index = index;
    var html = N.compileTemplate(this.thumbnailTemplateName, thumbData, 'RM.Jumbotron.JumbotronReference.prototype.createThumbnailHtml');
    return html;
}

RM.Jumbotron.JumbotronReference.prototype.createSlideHtml = function(slideData, index) {
    slideData.slideIndex = index;
    slideData.rbgScrimColor = RM.convertHexColorToRGB(slideData.scrimColor);
    slideData.centerColumnWidth = this.centerColumnWidth;
    var html = N.compileTemplate(this.slideTemplateName, slideData, 'RM.Jumbotron.JumbotronReference.prototype.createSlideHtml');
    return html;
}

RM.Jumbotron.JumbotronReference.prototype.placeHtmlHoldersAndButtons = function() {

    var styleInfo = '';

    if (this.isDynamicSize) {
        styleInfo += 'min-width:' + this.minWidth + 'px;';
        styleInfo += 'max-width:' + this.maxWidth + 'px;';
    }
    else {
        styleInfo = 'width:' + this.staticWidth + 'px;';
    }

    var params = { carouselName: this.name,
                   centerColumnWidth: this.centerColumnWidth,
                   styleInfo: styleInfo
                };

    var listHolderHtml = N.compileTemplate('jumbotron_list_holder_template', params, 'RM.Jumbotron.JumbotronReference.prototype.placeHtmlHoldersAndButtons');
    var $topWrapper = this.getHtmlTopWrapper();
    $topWrapper.prepend(listHolderHtml); //just in case there need to be other things in this wrapper

    var $wrapper = this.getHtmlWrapper(); //ie, the list holder

    var visibleList = N.compileTemplate('jumbotron_visible_list_temp', params, 'RM.Jumbotron.JumbotronReference.prototype.placeHtmlHoldersAndButtons');
    $wrapper.html(visibleList);

    var hiddenList = N.compileTemplate('jumbotron_hidden_list_temp', params, 'RM.Jumbotron.JumbotronReference.prototype.placeHtmlHoldersAndButtons');
    $wrapper.after(hiddenList);

    var thumbnailHolder = N.compileTemplate('jumbotron_thumbnail_wrapper_template', params, 'RM.Jumbotron.JumbotronReference.prototype.placeHtmlHoldersAndButtons');
    $wrapper.after(thumbnailHolder);

    var buttonsHtml = N.compileTemplate('jumbotron_buttons_template', params, 'RM.Jumbotron.JumbotronReference.prototype.placeHtmlHoldersAndButtons');
    $wrapper.after(buttonsHtml);
}

RM.Jumbotron.JumbotronReference.prototype.placeInitialThreeSlides = function() {
    var previousSlideIndex = this.getPreviousChronologicalSlideIndex();
    var firstVisibleSlideIndex = this.currentSlideIndex;
    var forwardOnDeckSlideIndex = this.getNextChronologicalSlideIndex();

    var $previousSlideClone = this.cloneItemFromHiddenList(previousSlideIndex);
    var $firstVisibleSlideClone = this.cloneItemFromHiddenList(firstVisibleSlideIndex);
    var $forwardSlideClone = this.cloneItemFromHiddenList(forwardOnDeckSlideIndex);

    var $visibleList = this.getVisibleList();
    $visibleList.empty();

    $visibleList.append($previousSlideClone);
    $visibleList.append($firstVisibleSlideClone);
    $visibleList.append($forwardSlideClone);

    $visibleList.css('left', -(this.currentSlideWidth));
}

RM.Jumbotron.JumbotronReference.prototype.getHtmlTopWrapper = function() {
    return $('#' + this.htmlTargetId);
}

//actually list wrapper
RM.Jumbotron.JumbotronReference.prototype.getHtmlWrapper = function() {
    return $('#' + this.htmlTargetId).find('.jumbotron_list_holder');
}

RM.Jumbotron.JumbotronReference.prototype.getVisibleList = function() {
    return $('#' + this.name + '_list');
}

RM.Jumbotron.JumbotronReference.prototype.getHiddenList = function() {
    return $('#' + this.name + '_list_slide_storage');
}

RM.Jumbotron.JumbotronReference.prototype.getCurrentVisibleSlideHtml = function() {
    var $visibleList = this.getVisibleList();
    return $visibleList.find('li:eq(1)');
}

RM.Jumbotron.JumbotronReference.prototype.getCurrentVisibleSlideScrimBox = function() {
    var $curSlide = this.getCurrentVisibleSlideHtml();
    return $curSlide.find('.jumbotron_scrim_area');
}

RM.Jumbotron.JumbotronReference.prototype.getCurrentOnDeckSlideHtml = function(direction) {
    var $visibleList = this.getVisibleList();
    if (direction == 'forward') return $visibleList.find('li:eq(2)');
    else if (direction == 'back') return $visibleList.find('li:eq(0)');
}

RM.Jumbotron.JumbotronReference.prototype.getCurrentOnDeckSlideScrimBox = function(direction) {
    var $onDeckSlide = this.getCurrentOnDeckSlideHtml(direction);
    return $onDeckSlide.find('.jumbotron_scrim_area');
}

RM.Jumbotron.JumbotronReference.prototype.getBothLists = function() {
    return $('#' + this.name + '_list_slide_storage, #' + this.name + '_list');
}

//NOT USED???
RM.Jumbotron.JumbotronReference.prototype.getSlideIndexInListFromHtml = function($slide) {
    return $slide.data('slide_index');
}

RM.Jumbotron.JumbotronReference.prototype.getNextChronologicalSlideIndex = function() {
    var curIndex = this.currentSlideIndex;
    var totalSlides = this.totalSlides;

    if (curIndex == (totalSlides - 1)) return 0;
    else return curIndex + 1;
}

RM.Jumbotron.JumbotronReference.prototype.getPreviousChronologicalSlideIndex = function() {
    var totalSlides = this.totalSlides;
    var curIndex = this.currentSlideIndex;

    if (curIndex == 0) return totalSlides - 1;
    else return curIndex - 1;
}

RM.Jumbotron.JumbotronReference.prototype.cloneItemFromHiddenList = function(index) {
    var $hiddenList = this.getHiddenList();
    var $slideWanted = $hiddenList.children().eq(index);
    return $slideWanted.clone();
}

RM.Jumbotron.JumbotronReference.prototype.sizeAndPositionListsAndLis = function() {
    var w = $(window).width();
    var widthToSet;
    var minWidth = this.minWidth;
    var maxWidth = this.maxWidth;

    if (this.isDynamicSize) {
        if (w < minWidth) widthToSet = minWidth
        else if (w > maxWidth) widthToSet = maxWidth
        else widthToSet = w;
    }
    else {
        widthToSet = this.staticWidth;
    }

    var $bothLists = this.getBothLists();
    var totalListWidthToSet = widthToSet * 3;
    $bothLists.css('width', totalListWidthToSet);

    var $allLis = $bothLists.find('.jumbotron_li');
    $allLis.css('width', widthToSet); //subsequent slides put into the visible list will be cloned from ones that already have correct size

    this.currentSlideWidth = widthToSet;

    var $visibleList = this.getVisibleList();
    $visibleList.css('left', -(widthToSet));
}

/*****************
* slide movement methods
*********************/
RM.Jumbotron.JumbotronReference.prototype.advanceToArbitrarySlide = function(targetIndex) {
    if (this.isCurrentlyAnimating) {
        console.log('blocked bc an animation is in progress');
        return false;
    }

    this.arbitrarilyReplaceOnDeckSlide(targetIndex);
    this.beginAnimateToOnDeckSlide('forward', targetIndex);
}

/***************
* This puts the user-selected slide in the "next" slot so we can slide them to it
* after this we advance in more or less the normal way
******************/
RM.Jumbotron.JumbotronReference.prototype.arbitrarilyReplaceOnDeckSlide = function(targetIndex) {
    var $visibleList = this.getVisibleList();
    var $curForwardSlide = $visibleList.find('li:eq(2)');
    $curForwardSlide.remove();

    var $newForwardOnDeckSlide = this.cloneItemFromHiddenList(targetIndex);
    $visibleList.append($newForwardOnDeckSlide);
}

RM.Jumbotron.JumbotronReference.prototype.beginAnimateToOnDeckSlide = function(direction, arbitraryAdvanceIndex) {
    if (this.isCurrentlyAnimating) {
        console.log('blocked bc an animation is in progress');
        return false;
    }

    var arbitraryAdvanceIndex = (typeof arbitraryAdvanceIndex !== "undefined") ? arbitraryAdvanceIndex : null;

    var targetIndex;
    if (direction == 'forward') {
        if (arbitraryAdvanceIndex != null) { //VERY important: can't just use "false" or else index zero would fail!!!!!!!
            targetIndex = arbitraryAdvanceIndex;
        }
        else {
            targetIndex = this.getNextChronologicalSlideIndex();
        }
    }
    else if (direction == 'back') {
        targetIndex = this.getPreviousChronologicalSlideIndex();
    }

    this.highlightThumbnailByIndex(targetIndex);

    this.isCurrentlyAnimating = true;
    var $onDeckScrim = this.getCurrentOnDeckSlideScrimBox(direction);
    $onDeckScrim.hide();

    var parentClass = this;

    //animate out current box
    var $curScrim = this.getCurrentVisibleSlideScrimBox(direction);
    $curScrim.fadeOut(this.fadeOutAnimationSpeed, function() {
        parentClass.slideInOnDeckSlide(direction, arbitraryAdvanceIndex);
    });
}

RM.Jumbotron.JumbotronReference.prototype.slideInOnDeckSlide = function(direction, arbitraryAdvanceIndex) { //direction "forward" or "back"
    var newLeftPx;
    var arbitraryAdvanceIndex = (typeof arbitraryAdvanceIndex !== "undefined") ? arbitraryAdvanceIndex : null;

    if (direction == 'forward') newLeftPx = -(this.currentSlideWidth * 2)
    else if (direction == 'back') newLeftPx = 0;

    //console.log('sliding the slide to new pos of', newLeftPx);

    var $sliderList = this.getVisibleList();
    var parentClass = this;

    $sliderList.animate({
                    left: newLeftPx,
                    y: 0,
                    queue: true
                },
                "swing",
                function() {
                    var $onDeckScrim = parentClass.getCurrentOnDeckSlideScrimBox(direction);
                    $onDeckScrim.fadeIn(parentClass.fadeOutAnimationSpeed, function() {
                        parentClass.finishAnimationAndPutNextSlidesOnDeck(direction, arbitraryAdvanceIndex);
                    });
                }
    );
}

RM.Jumbotron.JumbotronReference.prototype.finishAnimationAndPutNextSlidesOnDeck = function(direction, arbitraryAdvanceIndex) {
    //update current and on deck to be ready for next move; clean up view
    //we simply take the index of this slide and queue up the next one chronologically (if its last get the first)
    var arbitraryAdvanceIndex = (typeof arbitraryAdvanceIndex !== "undefined") ? arbitraryAdvanceIndex : null;

    //UPDATE THE CLASS SO IT KNOWS WHAT HAS JUST BECOME THE CURRENT SLIDE AND CAN SET UP TWO NEW ONES AROUND IT
    if (direction == 'forward') {
        if (arbitraryAdvanceIndex != null) { //VERY important: can't just use "false" or else index zero would fail!!!!!!!
            this.currentSlideIndex = arbitraryAdvanceIndex;
        }
        else {
            this.currentSlideIndex = this.getNextChronologicalSlideIndex();
        }
    }
    else if (direction == 'back') {
        this.currentSlideIndex = this.getPreviousChronologicalSlideIndex();
    }

    this.resetListPositionAndAddNewOnDeckSlides(direction, arbitraryAdvanceIndex);
    // this.highlightThumbnailByIndex(this.currentSlideIndex);
    this.isCurrentlyAnimating = false;
    this.resetAutoProgress(); //reset the auto-progress timer
}

RM.Jumbotron.JumbotronReference.prototype.resetListPositionAndAddNewOnDeckSlides = function(direction, arbitraryAdvanceIndex) {
    var $htmlList = this.getVisibleList();
    var $staleSlides;
    var arbitraryAdvanceIndex = (typeof arbitraryAdvanceIndex !== "undefined") ? arbitraryAdvanceIndex : null;

    if (direction == 'forward')  $staleSlides = $htmlList.find('li:eq(0), li:eq(1)');
    else if (direction == 'back') $staleSlides = $htmlList.find('li:eq(1), li:eq(2)');

    $staleSlides.remove();

    //restore the list to "middle" position and add a new slide on either side to be prepared for future actions
    $htmlList.css('left', -(this.currentSlideWidth));

    var nextIndex = this.getNextChronologicalSlideIndex();
    var previousIndex = this.getPreviousChronologicalSlideIndex();

    var $newForwardOnDeckSlide = this.cloneItemFromHiddenList(nextIndex);
    var $newPreviousOnDeckSlide = this.cloneItemFromHiddenList(previousIndex);

    $htmlList.prepend($newPreviousOnDeckSlide);
    $htmlList.append($newForwardOnDeckSlide);
}


/********************************
* MOCK DATA
********************************/

    RM.Jumbotron.mockCarouselData = [
        //id, image url, thunb url, scrim color, scrim image, scrim body text, scrim button text, click action
        {
            id: 0,
            imageUrl: 'images/jumbotron/large/1.jpg',
            scrimColor: '#000000', //must be hex color with all six digits written out in order to parse to rgb
            scrimImage: 'images/jumbotron/small/1.jpg',
            scrimBodyText: 'This is slide the first',
            scrimButtonText: 'Watch now',
            clickAction: '/test',
            scrimOpacity: 0.7
        },
        {
            id: 1,
            imageUrl: 'images/jumbotron/large/2.jpg',
            scrimColor: '#000000',
            scrimImage: 'images/jumbotron/small/2.jpg',
            scrimBodyText: 'This is slide the 2nd',
            scrimButtonText: 'Watch now',
            clickAction: '/test',
            scrimOpacity: 0.3
        },
        {
            id: 2,
            imageUrl: 'images/jumbotron/large/3.jpg',
            scrimColor: '#000000',
            scrimImage: 'images/jumbotron/small/3.jpg',
            scrimBodyText: 'This is slide the 3rd',
            scrimButtonText: 'Watch now',
            clickAction: '/test',
            scrimOpacity: 0.7
        },
        {
            id: 3,
            imageUrl: 'images/jumbotron/large/4.jpg',
            scrimColor: '#000000',
            scrimImage: 'images/jumbotron/small/4.jpg',
            scrimBodyText: 'This is slide the 4th',
            scrimButtonText: 'Watch now',
            clickAction: '/test',
            scrimOpacity: 0.3
        },
        {
            id: 4,
            imageUrl: 'images/jumbotron/large/5.jpg',
            scrimColor: '#000000',
            scrimImage: 'images/jumbotron/small/5.jpg',
            scrimBodyText: 'This is slide the 5th',
            scrimButtonText: 'Watch now',
            clickAction: '/test',
            scrimOpacity: 0.7
        }

    ];









