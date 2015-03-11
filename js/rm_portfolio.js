RM = {};
RM.Portfolio = {};



$(document).ready(function() {
	$('#make_jumbotron_button').on('click', function() {
		var numberOfSlides = $('#number_of_slides').val();
		console.log('making jt with', numberOfSlides);	
		RM.Portfolio.makeJumbotron(numberOfSlides);				 
	});

	$('#make_html_demo').on('click', function() {
		RM.Portfolio.jsonToHtmlDemo();				 
	});

	
});

RM.Portfolio.totalJumbotrons = 1;



RM.convertHexColorToRGB = function(hexValue) {
	var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hexValue);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}

RM.Portfolio.makeJumbotron = function(numberOfSlides) {
	$('#jumbotrons_holder').prepend('<div style="padding-bottom:20px; position: relative;" id="jumbotron_subholder_' + RM.Portfolio.totalJumbotrons + '"></div>');

	

	var params = {
		staticWidth: 900,
		slideData: RM.Jumbotron.mockCarouselData.slice(0, numberOfSlides),
		htmlTargetId: 'jumbotron_subholder_' + RM.Portfolio.totalJumbotrons,
		name: 'portfolio_jumobtron_' + RM.Portfolio.totalJumbotrons,
		id: $('#jt_name').val() || ('portfolio_jumobtron_' + RM.Portfolio.totalJumbotrons)

	};

	RM.Jumbotron.createNewJumbotron(params);
	$('#jt_name').val('');

	RM.Portfolio.totalJumbotrons++;
}
						   
RM.Portfolio.jsonToHtmlDemo = function() {
	var sample_handler = new N.JsonToHtmlHandler({
		dataPath: 'items',
		domTarget: 'test_json_target',
		templateName: 'test_json_template'
	});

	N.Ajax.makeAjaxCall({
		type: 'GET',
		url: '/data/test-data.php?page=1',
		jsonToHtmlHandlers: [sample_handler]	
	});
}			


			   