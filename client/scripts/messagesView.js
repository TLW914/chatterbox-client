var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
  },

  render: function() {
  },

  renderMessage: function(message) {
    if (message.username && message.text && message.roomname === $('#roomSelector').val()) {
      var formatMessage = _.template(`<div class = 'messageBox'><div class = 'username ${message.username}'>@<%- username %></div><br><div class = 'message'><%- text %></div></div>`);
      var formattedMessage = formatMessage(message);
      this.$chats.append(formattedMessage);
      $('.username').off('click').on('click', function(event) {
        var user = $(event.target).text();
        var className = $(event.target).attr('class').split(' ')[1];
        if (!Friends.friendList.includes(user)) {
          Friends.toggleStatus(user);
        }
        $(`.${className}`).css('color', 'rgb(0, 33, 132)').css('font-weight', 'bold');
      });
    }
  }

};