class YouTubeDownloader {
  constructor(videoId) {
    this.videoId = videoId;
  }

  fetch(callback) {
    window.fetch('/api/video-info?id=' + this.videoId)
      .then(function (res) {
        // console.log('res', res);
        return res.json();
      })
      .then(function (results) {
        // console.log('results', results);
        callback(results);
        // return YouTubeDownloader.makeHtml(results);
      });
      // .then(function (html) {
        // callback && callback(html);
      // });
  }

  static makeHtml(results) {
    var html = '';
    html += '<table class="table table-striped" style="background: rgba(255,255,255,0.7);" ng-controller="Downloader as downloader"><thead><tr><th>Quality</th><th>Format/Codecs</th><th style="text-align: right;"></th></tr></thead><tbody>';

    if(results.length > 0){
      results.forEach(function(value) {
        html += '\n\r<tr>';
        html += '<td>'+value.quality+'</td>';
        html += '<td>'+value.type+'</td>';
        html += '<td><a class="btn btn-success pull-left btn-download" target="_blank" style="margin-right: 15px;" title="在打开的新窗口中按 `Ctr + S`，即可保存在本地" ng-click="$event.preventDefault();downloader.showVideo("' + value.url + '");"><i class="glyphicon glyphicon-download-alt"></i>Download</a></td>';
        html += '</tr>\n\r';
      });
    }
    else{
      html += '\n\r<tr>';
      html += '<td>N/A</td>';
      html += '<td>N/A</td>';
      html += '<td>N/A</td>';
      html += '</tr>\n\r';
    }

    html += '</tbody></table>';

    return html;
  }
}


// class YouTubeDownloader {
//   constructor(videoId) {
//     this.videoId = videoId;
//   }

// YouTubeDownloader.prototype.render = function (callback) {
//   window.fetch('/api/video-info?id=' + this.videoId)
//     .then(function (res) {
//       // console.log('res', res);
//       return res.json();
//     })
//     .then(function (results) {
//       // console.log('results', results);
//       return YouTubeDownloader.makeHtml(results);
//     })
//     .then(function (html) {
//       callback && callback(html);
//     });
// };

// YouTubeDownloader.makeHtml = function (results) {
//   var html = '';
//   html += '<table class="table table-striped" style="background: rgba(255,255,255,0.7);" ng-controller="Downloader as downloader"><thead><tr><th>Quality</th><th>Format/Codecs</th><th style="text-align: right;"></th></tr></thead><tbody>';

//   if(results.length > 0){
//     results.forEach(function(value) {
//       html += '\n\r<tr>';
//       html += '<td>'+value.quality+'</td>';
//       html += '<td>'+value.type+'</td>';
//       html += '<td><a class="btn btn-success pull-left btn-download" target="_blank" href="' + value.url + '" style="margin-right: 15px;" title="在打开的新窗口中按 `Ctr + S`，即可保存在本地" ng-click="downloader.showVideo(' + value.url + ');"><i class="glyphicon glyphicon-download-alt"></i>Download</a></td>';
//       html += '</tr>\n\r';
//     });
//   }
//   else{
//     html += '\n\r<tr>';
//     html += '<td>N/A</td>';
//     html += '<td>N/A</td>';
//     html += '<td>N/A</td>';
//     html += '</tr>\n\r';
//   }

//   html += '</tbody></table>';

//   return html;
// };
