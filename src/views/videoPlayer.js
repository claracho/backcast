var VideoPlayerView = Backbone.View.extend({
  
  initialize: function() {
    this.render();
    this.collection.on('select', this.render, this);
  },


  render: function(e) {
    this.model = e || this.collection.models[0];
    console.log(this.model);
    if (this.model) {
      this.$el.html(this.template(this.model.attributes));	
    } else {
      this.$el.html('<div class="loading">Please wait...</div>');
    }
    return this;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
