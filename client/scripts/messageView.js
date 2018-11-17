var MessageView = {

  render: _.template(`
      <!--
      <div class="chat">
        <div class="username"></div>
        <div></div>
      </div>
      -->
    `),

  renderMessage: function (message) {
    var formatMessage = _.template("<div class ='chat'><div class='username'><%- username %></b><br><%- text %></div>");
    var formattedMessage = formatMessage(message);
    this.$chats.append(formattedMessage);
  }

};