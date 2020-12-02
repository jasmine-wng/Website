
function changeSomeHtml () {
  $("#about-me").html ("page coming soooooon");
}

$("#about-me").click(changeSomeHtml);

function changeHomeHTML (){
  $("#home").html ("you're already here!");
}
$("#home").click(changeHomeHTML);

function unload () {
  $("#main_container").html (" ");
}
function loadTravel () {
  unload ()
  $.ajax({url: "travels.html", success: loadContent});
}
$("#travel-link").click(loadTravel);

function loadContent (content){
  $("#game_content").html (content);
}
function loadGame (){
  $("#game_content").html("");
  $.ajax({url: "game.html", success: loadContent});
}
$("#game_button").click(loadGame);

$('#jam_button').click(function() {
  $.ajax({url: "jam.html",success: function(result) {
      $("#jam_content").html(result);
    }
  });

function requestBlogArticlesData (){
  $.ajax({
    dataType: "json",
    url: "https://firebasestorage.googleapis.com/v0/b/advancedtopicscs.appspot.com/o/blogArticles.json?alt=media&token=478d06a6-d7e5-4cac-a92d-7670dea8de17",
    success: loadBlogArticlesJSONAsHTML,
  });
}

function loadBlogArticlesJSONAsHTML(result) {
  console.log(result);
  var myString = "";
  for (var i = 0; i < result.length; i++) {
    var nextResult = result[i];

    myString += "<h2>" + nextResult['type'] + "</h2>";
  }
  // Set the HTML
  $("#blogArticles").html(myString);
}
$("#blogArticlesButton").click (requestBlogArticlesData);
