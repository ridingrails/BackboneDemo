TD.Views.TasksListView = Backbone.View.extend({
  events: {
    "click li.task": "showTask"
  },

  render: function () {
    var that = this;

    var renderedContent = JST["tasks/list"]({
      tasks: that.collection
    });

    that.$el.html(renderedContent);
    return that;
  },

  showTask: function (event) {
    console.log(
      ("You clicked task #" +
        $(event.currentTarget).attr("data-id") +
          "! So good a click!")
    );
  }
});
