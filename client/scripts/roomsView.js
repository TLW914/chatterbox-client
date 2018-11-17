var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),
  $addRoom: $('#addRoom'),

  initialize: function() {
    RoomsView.$addRoom.on('click', RoomsView.handleAddRoom);
    $('#roomSelector').on('change', RoomsView.handleChangeRoom);
  },

  render: function() {
  },

  renderRoom: function() {
    // _.template("<b><%- value %></b>");
    var formatRoom = _.template("<div><b><%- room %></b></div>");
    var formattedRoom = formatRoom({room: this.button});
    this.$select.append(formattedRoom);
  },
  
  handleAddRoom: function(event) {
    var roomName = document.createElement("option");
    roomName.text = $("#addRoomName").val();
    Rooms.push(roomName.text);
    document.getElementById("roomSelector").add(roomName);
  },
  
  handleChangeRoom: function() {
    $('#chats').empty();
    App.fetch();
  }

};
