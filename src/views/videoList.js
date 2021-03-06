var VideoListView = Backbone.View.extend({

  initialize: function() {
    this.collection.on('sync', this.render, this);
    this.render();
  },


  render: function() {
    // this.$el.children().detach();
    this.$el.html(this.template());
    this.$('.video-list').empty();
    this.collection.forEach((element) => {
      var videoView = new VideoListEntryView({ model: element });
      this.$('.video-list').append(videoView.render());
    });

    return this;
  },

  template: templateURL('src/templates/videoList.html')

});
