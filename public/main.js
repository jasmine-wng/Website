
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
