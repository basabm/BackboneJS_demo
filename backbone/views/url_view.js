// Create a view to handle events 
var URLView=Backbone.View.extend({
    el: $("#urls"),
    inputbox:  $("#input"),
    initialize: function() {
      // When new model is added just render it on screen
      this.listenTo(this.model, 'change', this.render);
      this.listenTo(URLs, 'add', this.addOne);
    },
    events: {
      "click #add": "addURL",
      "click .addfav": "addToFav",
      "click #favoriteList li" : "deleteURL"
    },
    addURL: function(){
      // Createa url model and add to collection
      URLs.create({linkurl: this.inputbox.val(), favorite: false});
    },
    render: function(){
      this.$el.html(this.template(this.model.toJSON()));
    },
    addOne: function(urlmodel){
      var template = _.template( $('#urlList').html(), urlmodel.toJSON());
      // Load the compiled HTML into the Backbone "el"
      this.$el.find('#urllist').prepend(template);
    },
    addToFav: function(evt){
       var list=$(evt.target);
       var url = URLs.findWhere({ linkurl: list.text()});
       // If model is not in collection
       if(url!=undefined){
         url.set({favorite: true})
         url.save();
       }
       else{
          URLs.create({linkurl: list.text(), favorite: true});
       }
       $(this.el).find("#favoriteList").prepend('<li>'+list.addClass('fav').removeClass('addfav').html()+'</li>');  
       $(evt.target).remove();     
    },
    deleteURL: function(evt){
      //Find the current model and delete it
       var model = URLs.findWhere({ linkurl: $(evt.target).text()});
       // Be on safer side always :-)
       if(model!=undefined){
         model.destroy();
         model.save();
       }
       evt.target.remove();
    }
  });
  // This is not a very good way to start a view, I should use router instead but for now let's make it work.
  var samplemodel=new URLModel({linkurl: "www.google.com", favorite: false}); 
  var viewurl= new URLView({model: samplemodel});