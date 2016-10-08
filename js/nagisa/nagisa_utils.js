N.Utils = N.Utils || {};
N.Agreements = N.Agreements || {};

N.Agreements.Library = {
	'sample_data_agreement': {
		'objectRoot': {
			path: 'items',
			dataType: 'array',
			dataItemStructure: {
        "id": "number",
        "name": "string",
        "image": "string",
        "mock": {
        	"alpha": "array",
        	"beta": "number",
        	"gamma": "string"
        }
	    }
		}
	}
}

N.Agreements.testAgreement = function(agreement, ajaxResult) {
	var failureMessages = [];

	//see if the main data object is where and what it should be



	return {
		doesAgreementPass: !(failureMessages.length),
		failureMessages: failureMessages
	}
}

N.compileTemplate = function(templateName, data, callingMethod, templateLanguage) {
	var templateLanguage = templateLanguage || N.defaultTemplateLanguage;
	var data = data || null;

	try {
		if (templateLanguage == 'underscore') {
			if (data) {
				var templateResult =  _.template($("#" + templateName).html(), data);
			}
			else {
				var templateResult =  _.template($("#" + templateName).html()); //without data, this returns a function, storing the template for later use in a variable
			}
			

		}
        else if (templateLanguage == 'jquery_tmpl') {
            if (data) {
                var templateResult =  $.tmpl($("#" + templateName).html(), data);
            }
            else {
               // var templateResult =  _.template($("#" + templateName).html()); //without data, this returns a function, storing the template for later use in a variable
            }
        }
		//to do: add other deprecated templating languages as needed

        return templateResult;
	}
	catch(e) {
		console.log('the following template error occurred', e);
		console.log('error compiling template named:', templateName, 'with data:', data, 'called from method: ', callingMethod);
	}
};

N.Utils.findObjectAttributeByName = function(objToParse, nameString) {
	var nameArray = nameString.split('.');
	var currentObject = objToParse;

	for (var i=0; i<nameArray.length; i++) {
		
		if (typeof currentObject[nameArray[i]] == 'undefined') {
			currentObject = null;
			break;
		}
		else {
			currentObject = currentObject[nameArray[i]];
		}
	}

	return currentObject;
}