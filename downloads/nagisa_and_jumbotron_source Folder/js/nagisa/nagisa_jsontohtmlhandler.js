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















