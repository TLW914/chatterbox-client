var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function() {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);
  },

  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {
      // examine the response from the server request:
      // console.log(data);
      messages = data.results;
      _.each(messages, function(message) {
        MessagesView.renderMessage(message);
        if (!Rooms.includes(message.roomname)) {
          Rooms.push(message.roomname);
          var roomName = document.createElement("option");
          roomName.text = message.roomname;
          document.getElementById("roomSelector").add(roomName);
        }
      });
      callback();
    });
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};
