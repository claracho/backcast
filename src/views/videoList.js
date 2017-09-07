var VideoListView = Backbone.View.extend({

  initialize: function() {
    this.collection.forEach(this.renderVideo, this);
    this.collection.on('sync', this.render, this);
    this.render();
  },

  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());
    return this;
  },

  renderVideo: function(video) {
    var videoView = new VideoListEntryView({ model: video });
    this.$el.append(videoView.render());
  },

  template: templateURL('src/templates/videoList.html')

});
