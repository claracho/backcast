var VideoListEntryView = Backbone.View.extend({

  //el: ".video-list",

  initialize: function() {
    this.model.on('change', this.render, this);
  },

  events: {
    'click .video-list-entry-title': 'clickHandler'
  },

  clickHandler: function() {
    this.model.select();
  },

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this.$el;
  },

  template: templateURL('src/templates/videoListEntry.html')

});
