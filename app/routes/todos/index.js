import Ember from 'ember';

export default Ember.Route.extend({
  todos: function() {
    return this.model();
  }
});
