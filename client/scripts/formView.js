var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    var user = window.location.search.substring(10, window.location.search.length);
    var message = $("#message").val();
    var room = $("#roomSelector :selected").text();
    var messageObject = {username: user, text: message, roomname: room};
    console.log(messageObject);
    Parse.create(messageObject);
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};