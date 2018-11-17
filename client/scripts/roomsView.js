var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
  },

  render: function() {
  },

  renderRoom: function() {
    // _.template("<b><%- value %></b>");
    var formatRoom = _.template("<div><b><%- room %></b></div>");
    var formattedRoom = formatRoom({room: this.button});
    this.$select.append(formattedRoom);
  }

};
