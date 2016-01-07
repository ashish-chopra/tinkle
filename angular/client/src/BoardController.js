(function() {
  angular
      .module('Tinkle')
      .controller('BoardController', boardController);

  boardController.$inject = ['BoardModel'];
  function boardController(BoardModel) {
    var main = this;

    main.currentStory = {};
    main.stories = BoardModel.getStories();
    main.statuses = BoardModel.getStatuses();
    main.types = BoardModel.getTypes();

    main.newStory = function() {
      console.log("story added successfully");
      console.log(main.currentStatus);
      main.currentStory = {};
    };

    main.setCurrentStory = function(obj) {
      main.currentStory = obj;
    }

    main.createStory = function() {
      main.stories.push({
        title: "New Story"
      });
    }

  }

}());
