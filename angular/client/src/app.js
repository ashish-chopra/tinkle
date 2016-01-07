(function () {
  angular
    .module('Tinkle', ['ui.router'])
    .config(configureApp);

    configureApp.$inject = ['$urlRouterProvider', '$stateProvider'];
    function configureApp($urlRouterProvider, $stateProvider) {
        $urlRouterProvider.otherwise("/");

        $stateProvider
          .state('home', {
            url: "/",
            templateUrl: "src/templates/home.html"
          })
          .state('board', {
            url: "/board",
            templateUrl: "src/templates/board.html",
            controller: "BoardController",
            controllerAs: "boardCtrl"
          })
          .state('reports', {
            url: "/reports",
            templateUrl: "src/templates/report.html"
          });
    }

}());
