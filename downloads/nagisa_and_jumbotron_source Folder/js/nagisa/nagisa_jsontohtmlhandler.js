// RM.Jumbotron.JumbotronReference = function(params) {
//     this.totalSlides = params.totalSlides;
//     this.currentSlideIndex = params.currentSlideIndex || 0; //this can be moved one by one or willy nilly when they click buttons
//     this.name = params.name;
//     this.slideData = params.slideData;
//     this.htmlTargetId = params.htmlTargetId; //this tells it where on the page to create the necessary lists etc, so we don't have to worry about any of that
//     this.minWidth = params.minWidth || 1000;
//     this.maxWidth = params.maxWidth || 1600;
//     this.isCurrentlyAnimating = false;
//     this.fadeOutAnimationSpeed = params.fadeOutAnimationSpeed || 400;
//     this.slideMoveAnimationSpeed = params.slideMoveAnimationSpeed || 800;
//     this.currentSlideWidth; //set by the setSizeOfLis method, called on setup and resize
//     this.stopAutoAdvanceFlag = false; //use for testing to stop auto-advance
//     this.autoAdvanceInterval;
//     this.autoAdvanceSpeed = params.autoAdvanceSpeed || 8000;
//     this.isDynamicSize = (typeof params.isDynamicSize !== "undefined") ? params.isDynamicSize : false;
//     this.staticWidth = params.staticWidth || null;
//     this.slideTemplateName = params.slideTemplateName || 'jumbotron_slide_template';
//     this.thumbnailTemplateName = params.thumbnailTemplateName || 'jumbotron_thumbnail_template';
//     this.centerColumnWidth = params.centerColumnWidth || this.staticWidth;
// }

// RM.Jumbotron.JumbotronReference.prototype.resizeSlidesOnWindowResize = function() {
//     //might possibly be some issues with resizing while in the middle of an animation, but surprisingly seems to work ok
//     this.sizeAndPositionListsAndLis();
// }

N.JsonToHtmlHandler = function(params) {
    this.dataPath = params.dataPath || null;
    this.domTarget = params.domTarget;
    this.templateName = params.templateName;
    this.customJsonHandler = params.customJsonHandler || null;
    this.afterCompleteCallback = params.afterCompleteCallback || null;
    this.contentPosition = params.contentPosition || 'append'; // prepend | apppend | replace
}

N.JsonToHtmlHandler.prototype.execute = function(returnedJson) {
    var jsonArray;
    var allHtml = '';

    if (this.dataPath) {
        jsonArray = N.Utils.findObjectAttributeByName(returnedJson, this.dataPath);
    }
    else {
        jsonArray = returnedJson;
    }

    //further json processing if desired
    if (this.customJsonHandler) {
        jsonArray = customJsonHandler(jsonArray);
    }

    for (var i=0; i<jsonArray.length; i++) {
        var thisJson = jsonArray[i];

        var thisHtml = N.compileTemplate(this.templateName, thisJson);
        allHtml += thisHtml;
    }

    var $target = (this.domTarget == 'body') ? $('body') : $('#' + this.domTarget);

    if (this.contentPosition == 'append') {
        $target.append(allHtml);
    }
    else if (this.contentPosition == 'prepend') {
        $target.prepend(allHtml);
    }
    else if (this.contentPosition == 'replace') {
        $target.html(allHtml);
    }

    //done adding, call after function
    if (this.afterCompleteCallback) {
        this.afterCompleteCallback();
    }
};















