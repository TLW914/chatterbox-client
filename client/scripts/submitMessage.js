$(".submit").on("click", function() {
  var user = window.location.search.substring(10, window.location.search.length);
  var message = $("#message").val();
  var room = "test";
  var messageObject = {username: user, text: message, roomname: room};
  Parse.create(messageObject);
});