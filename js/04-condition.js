$(function(){
	//Grab the template script
	var source = $("#music-template").html();

	//Compile the template
	var template = Handlebars.compile(source);

	//Define our data object
	var context = {
		music:
		[
			{name: "My love", url: "https://youtu.be/ulOb9gIGGd0", isPublic: true, isUpdated: false},
			{name: "Apologize", url: "https://youtu.be/QLYjqqoEPpc", isPublic: false, isUpdated: false},
			{name: "Demons", url: "https://youtu.be/mWRsgZuwf_8", isPublic: false, isUpdated: true}
		]
  };

	//Pass our data to template
	var Compiledhtml = template(context);

	$('.content-placeholder').html(Compiledhtml);
});