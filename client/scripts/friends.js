var Friends = {
  friendList: [],
  
  toggleStatus: function(friend) {
    this.friendList.push(friend);
    console.log(location.href)
    $("#chats").load(location.href + " #chats>*", "");
  }


};