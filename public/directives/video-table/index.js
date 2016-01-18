function VideosTableController(modal, sce) {
  this.modal = modal;
  this.sce = sce;
}

VideosTableController.prototype.show = function (src, quality) {
  console.log('show', src);
  sce = this.sce;

  const size = VideosTableController.getSizeByQuality(quality);

  console.log('quality', quality);
  console.log('size', size);

  this.modal.open({
    templateUrl: 'directives/video-table/video/index.html',
    size: size,
    controller: function() {
      this.src = sce.trustAsResourceUrl(src);
    },
    controllerAs: 'video',
  });
};

VideosTableController.getSizeByQuality = function (quality) {
  let size = 'xl';
  switch (quality) {

    case 'hd720':
      size = 'xl';
      break;
    case 'medium':
      size = 'lg';
      break;
    case 'small':
      size = 'md';
      break;

    default:
    ;
  }

  return size;
};

function videoTableDirective() {
  return {
    templateUrl: 'directives/video-table/index.html',
    controller: VideosTableController,
    controllerAs: 'videoTable',
    scope: {
      list: '='
    },
    bindToController: true,
  };
}

VideosTableController.$inject = ['$uibModal', '$sce'];