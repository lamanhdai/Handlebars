$(function(){
  //Grab the template script
  var source = $("#music-template").html();

  //Compile the template
  var template = Handlebars.compile(source);

  //Define comment function
  Handlebars.registerPartial('userMessage',
    '<{{tagName}}>User: {{author.username}}</{{tagName}}><div class="message">{{author.message}}</div>');

  //Define our data object
  var context = {
    music:
    [
      {
        name: "My love", url: "https://youtu.be/ulOb9gIGGd0",
        author: {username: "Admin", message: "love it!"},
        guest: [{
          author: {username: "Dai", message: "very best!"}
        }]
      }
    ]
  };

  //Pass our data to template
  var Compiledhtml = template(context);

  $('.content-placeholder').html(Compiledhtml);
});