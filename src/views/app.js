var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.render();
    this.videos = new Videos(window.exampleVideoData);
    this.videoList = new VideoListView({ el: '.list', collection: this.videos });
    this.videoPlayer = new VideoPlayerView({ el: '.player', collection: this.videos });
    this.search = new SearchView();
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/app.html')

});
