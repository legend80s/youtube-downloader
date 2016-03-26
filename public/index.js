angular.module('youtube.downloader', ['ui.bootstrap', 'ui.router'])
  .controller('Downloader', DownloaderController)
  .directive('videoTable', videoTableDirective)
  .config(['$stateProvider', '$urlRouterProvider', stateConfig]);

function stateConfig(stateProvider, urlRouterProvider) {
  stateProvider
    .state('downloader', {
      url: '/downloader',
      templateUrl: './views/downloader/index.html',
      // controller: PrisonBreakController,
      // controllerAs: breaker,
    })
    .state('prisonBreak', {
      url: '/prision-break',
      templateUrl: './views/prison-break/index.html',
      // controller: PrisonBreakController,
      // controllerAs: breaker,
    });

  urlRouterProvider.otherwise('/downloader');
}
