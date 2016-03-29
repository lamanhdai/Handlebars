$(function(){
	//Grab the template script
	var source = $("#music-template").html();

	//Compile the template
	var template = Handlebars.compile(source);

	//Define our data object
	var context = {
		music:
		[
			{name: "My love", url: "https://youtu.be/ulOb9gIGGd0"},
			{name: "Apologize", url: "https://youtu.be/QLYjqqoEPpc"}
		]
  };

	//Define block helper function
	Handlebars.registerHelper('list', function(items, options) {
	  var out = "<ul>";

	  for(var i=0, l=items.length; i<l; i++) {
	    out = out + "<li>" + options.fn(items[i]) + "</li>";
	  }

	  return out + "</ul>";
	});


	//Pass our data to template
	var Compiledhtml = template(context);

	$('.content-placeholder').html(Compiledhtml);
});