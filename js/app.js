App = Ember.Application.create();

App.Router.map(function() {
  this.route("about", { path: "/about" });
  this.route("portfolio", { path: "/portfolio" });
  this.route("resume", { path: "/resume" });
});

App.IndexRoute = Ember.Route.extend({
  
});
