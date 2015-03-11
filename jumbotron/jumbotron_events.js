

RM.Jumbotron.JumbotronReference.prototype.setUpJumbotronEvents = function() {
	var $thumbnails = this.getThumbnails();
	var parentClass = this;

	$thumbnails.on('click', function() {
		var targetIndex = $(this).data('index');

		if (targetIndex == parentClass.currentSlideIndex) {
			console.log('clicked what hes already on- avin a laff!!');
			return false;
		}

		parentClass.advanceToArbitrarySlide(targetIndex);
	});

	var $backButton = $('#' + this.name + '_back_button');
	var $forwardButton = $('#' + this.name + '_forward_button');

	$backButton.on('click', function() {
		parentClass.beginAnimateToOnDeckSlide('back');
	});

	$forwardButton.on('click', function() {
		parentClass.beginAnimateToOnDeckSlide('forward');
	});

	if (parentClass.isDynamicSize) {
		$(window).resize(function() {
			//console.log('resize!!');
			parentClass.resizeSlidesOnWindowResize();
		});
	}

}