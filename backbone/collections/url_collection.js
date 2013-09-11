// Just definea collection for URL model
var URLList=Backbone.Collection.extend({
  Model: URLModel,
   localStorage: new Backbone.LocalStorage("urlCollection")
});
// Create an instance to make colletion work!
var URLs=new URLList;