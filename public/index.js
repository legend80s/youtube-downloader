angular.module('youtube.downloader', ['ui.bootstrap'])
  .controller('Downloader', DownloaderController)
  .directive('videoTable', videoTableDirective);
