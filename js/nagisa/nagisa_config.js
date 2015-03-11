/********
* global vars to vonfigure the nagisa framework
*********/

N.defaultTemplateLanguage = 'underscore';

_.templateSettings = { //Underscore Templates.
	interpolate : /\{\*\=(.+?)\*\}/g, //{*= *}
	evaluate: /\{\*(.+?)\*\}/g //{* js code *}
};

N.defaultAjaxErrorHandler = function() {
	console.log('An error occurred while making an Ajax call');
}