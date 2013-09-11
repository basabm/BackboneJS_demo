// create a top level name to refer object in underscore template
 _.templateSettings.variable = "urllist";

// Create a URL moel
var URLModel=Backbone.Model.extend({
     defaults: {
       linkurl: "",
       favorite: false
     },
     initialize: function(){
        //This function is empty as code is small
       // Best practises recoomends use of the constructor so I have just defined it here
     }
});