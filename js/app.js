App = Ember.Application.create();

App.Router.map(function() {
  this.resource("about", { path: "/" });
  this.route("portfolio");
  this.route("resume");
});

App.IndexRoute = Ember.Route.extend({

});
