var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
  },

  render: function() {
  },

  renderMessage: function(message) {
    if (!message.username) {
      message.username = 'Anonymous';
    }
    if (!message.text) {
      message.text = 'No message declared.';
    }
    var formatMessage = _.template("<div id = 'message'><b><%- username %></b><br><%- text %></div>");
    var formattedMessage = formatMessage(message);
    this.$chats.append(formattedMessage);
  }
};