(function() {
  function Tasks($firebaseArray) {
    var ref = new Firebase('https://maksbloctime.firebaseio.com/');

    // download tasks into a synchronized array
    var tasks = $firebaseArray(ref);

    return {
      add: function(task) {
        tasks.$add({
            name: task,
            date: Firebase.ServerValue.TIMESTAMP
        });

    },

    delete: function(index) {
      return tasks.$remove(index, 1);
    },

    all: function() {
      return tasks;
    }
  }
}

  angular
    .module('maksBlocTime')
    .factory('Tasks', ['$firebaseArray', Tasks]);
})();
