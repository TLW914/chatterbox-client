var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
  },

  render: function() {
  },

  renderMessage: function(message) {
    var formatMessage = _.template("<div><b><%- username %></b><br><%- text %></div>");
    var formattedMessage = formatMessage(message);
    this.$chats.append(formattedMessage);
  }
};