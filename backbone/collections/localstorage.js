//Just get url's stored in local storage and display in favorite list
var list=new Backbone.LocalStorage("urlCollection");
_.each(list.findAll(),function(url){
  if(url.favorite){
    $("#favoriteList").prepend("<li>"+url.linkurl+"</li>");
  }
});