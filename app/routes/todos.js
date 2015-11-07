import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    var todos = [
      {
        title: "Learn Ember",
        complete: false
      },
      {
        title: "Solve World Hunger",
        complete: false
      }
    ];

    return todos;
  }
});
