var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
  },

  render: function() {
  },

  renderMessage: function(message) {
    if (message.username && message.text) {
      var formatMessage = _.template("<div class = 'messageBox'><div class = 'username'><b><%- username %></b></div><br><div class = 'message'><%- text %></div></div>");
      var formattedMessage = formatMessage(message);
      this.$chats.append(formattedMessage);
      $('.username').on('click', function() {console.log('testing');});
    }
  }

};