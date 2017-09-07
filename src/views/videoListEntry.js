var VideoListEntryView = Backbone.View.extend({

  initialize: function() {
    this.model.on('change', this.render, this);
  },

  events: {
    'click .video-list-entry-title': 'handleClick'
  },

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this;
  },

  handleClick: function() {
    this.model.select();
  },

  template: templateURL('src/templates/videoListEntry.html')

});
