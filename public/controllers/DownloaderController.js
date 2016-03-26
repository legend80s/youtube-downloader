function DownloaderController(http, timeout) {
  this.http = http;
  this.timeout = timeout;
  this.rawUrl = 'https://www.youtube.com/watch?v=b6S5EJNtP30';
  this.parsing = false;
}

DownloaderController.prototype.parse = function (rawUrl) {
  console.log('parse url', rawUrl);
  var url = this.rawUrl.trim();
  var emptyUrlError = 'URL不能为空';

  if (url === '') {
    alert(emptyUrlError);
    console.log(emptyUrlError);
    return ;
  }

  this.startDownload(url);
};

DownloaderController.prototype.startDownload = function(url) {
  var videoId = DownloaderController.getVideoId(url); // '1yO5xIVy2dM'
  var videoIdParseError = 'URL解析失败，无法获取video ID，请确认输入是否正确！';

  if (!videoId) {
    alert(videoIdParseError);
    console.log(videoIdParseError);
    return ;
  }

  this.parsing = true;

  this.http.get(DownloaderController.videoInfoUrl + videoId)
    .success(videoInfo => {
      this.parsing = false;
      this.videoInfo = videoInfo;

      // console.log('videoInfo', videoInfo);
    });
}

DownloaderController.getVideoId = function(url) {
  var regExp = /.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]*).*/;
  var parts = url.match(regExp);
  if (parts) {
    return parts[1];
  }

  return '';
}

DownloaderController.videoInfoUrl = '/api/video-info?id=';

DownloaderController.$inject = ['$http', '$timeout'];