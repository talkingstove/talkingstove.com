/*******
* ajax wrapper with default error handling, etc
**************/

N.Ajax = N.Ajax || {};

N.Ajax.makeAjaxCall = function(options) {
	var type = options.type;
	var url = options.url;
	var dataTypeReturned = options.dataTypeReturned || 'json';
	var successHandler = options.successHandler || null;
	var afterSuccessCallback = options.afterSuccessCallback || null;
	var doneCallback = options.doneCallback || null;
	var errorHandler = options.errorHandler || N.defaultAjaxErrorHandler;
	var dataToSend = options.dataToSend || {};
	var jsonToHtmlHandlers = options.jsonToHtmlHandlers || null;  //array of classes

	$.ajax({
		type: type,
		url: url,
		dataType: dataTypeReturned,
		data: dataToSend
	})
	.success(function(data) {
		if (successHandler) {
			successHandler(data);
		}

		if (jsonToHtmlHandlers) {
			for (var i=0; i<jsonToHtmlHandlers.length; i++) {

				jsonToHtmlHandlers[i].execute(data);
			}
		}

		if (afterSuccessCallback) {
			afterSuccessCallback(data);
		}
	})
	.error(function() {
		errorHandler();
	})
	.done(function() {
		if (doneCallback) {
			doneCallback();
		}
	});
}

/*****************
** SAMPLE:
* N.Ajax.makeAjaxCall({
*	type: 'GET',
* 	url: '/data/test-data.php?page=1',
* successHandler: function(data) { console.log(data) }	
* });
*******/