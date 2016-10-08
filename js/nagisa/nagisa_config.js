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

N.Library = N.Library || {};
N.Library.Models = N.Library.Models || {};

// var m = new N.Classes.NModel({name: 'ry'})
//m.createBinding('testname', '#jt_name');
//m.set('testname', 'lol')
N.Classes.NModel = N.Classes.NBase.extend(function(base) {
  return {
    // The `init` method serves as the constructor.
    init: function(params) {
      // Insert private functions here
      console.log('NEW model:', params);
      if (!params.name) {
        console.warn('Model needs a name');
      }
      else if ( N.Library.Models[params.name] ) {
        console.warn('Model with this name already exists... would be overwritten');
      }
      else {
        N.Library.Models[params.name] = this;
      }

      this.bindings = {};
    },

    set: function(paramName, value, isSilent) {
      this[paramName] = value;
      isSilent = isSilent || false;

      if (!this.bindings[paramName]) {
        this.bindings[paramName] = {};
      }
      else { //update the DOM based on the bindings
        if (!isSilent) {
          if (this.bindings[paramName].selector) {
            $(this.bindings[paramName].selector).val(value); //todo: some fields wont take "val"
          }
        }
      }
    },

    get: function(paramName) {
      return this[paramName];
    },

    //selector = jquery string, eg '#myfield'
    createBinding: function(paramName, selector) {
      var self = this;

      if (!this.bindings[paramName]) {
        this.bindings[paramName] = {};
      }

      this.bindings[paramName].selector = selector; //todo handle multi

      //create reverse binding from dom to here
      //watch out for infinite loop!
      $(selector).on('change', function() {
        self.set(paramName, $(selector).val(), true);
      });
    }
  }
});

N.Classes.NView = N.Classes.NBase.extend(function(base) {
  return {
    // The `init` method serves as the constructor.
    init: function(params) {
        // Insert private functions here
        console.log('NEW view:', params);
    },


  }
});




