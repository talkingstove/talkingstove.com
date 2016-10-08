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

N.Classes = N.Classes || {};

N.Classes.NBase = Fiber.extend(function(base) {
  return {
    // The `init` method serves as the constructor.
    init: function(params) {
        // Insert private functions here
        console.log('NEW CLASS with params:', params);
    },
    log: function(str) {
    	console.log(str);
    }
    // method1: function(arguments){
    //     console.log('animal::here! method1', this.s, this.result, arguments);
    // },
  }
});

N.Classes.NModel = N.Classes.NBase.extend(function(base) {
  return {
    // The `init` method serves as the constructor.
    init: function(params) {
        // Insert private functions here
        console.log('NEW model:', params);
    }
  }
});

N.Classes.NView = N.Classes.NBase.extend(function(base) {
  return {
    // The `init` method serves as the constructor.
    init: function(params) {
        // Insert private functions here
        console.log('NEW view:', params);
    }
  }
});




