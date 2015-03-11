/**
 * @fileOverview Methods for the inifinitle-looping, highly controllable "Jumbotron carousel" used on homepage as of 9/2013
 * @author Ryan Moore
 */

RM.Jumbotron.jumbrotronReferenceRepository = [];

RM.Jumbotron.createNewJumbotron = function(params) {
	var jumbotronReferenceParams = params;
 	jumbotronReferenceParams.totalSlides = params.slideData.length;

 	if (params.slideData.length < 2) {
 		console.error('The minium number of slides for a jumbotron is 2!');
 		return false;
 	}

 	var jumbotronReference = new RM.Jumbotron.JumbotronReference(jumbotronReferenceParams);
 	N.Library.createReference(params.id, jumbotronReference, "A test jumbotron as part of Nagisa demo");
 	//jumbotronReference.init();
}

/********
* getters and setters
*********/
RM.Jumbotron.getJumbotronReferenceByName = function(name) {
    for (var i=0; i<RM.Jumbotron.jumbrotronReferenceRepository.length; i++) {
        if (name == RM.Jumbotron.jumbrotronReferenceRepository[i].name) return RM.Jumbotron.jumbrotronReferenceRepository[i]
    }

    return null;
}