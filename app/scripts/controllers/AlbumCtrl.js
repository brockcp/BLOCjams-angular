
(function() {
      function AlbumCtrl(Fixtures, $rootScope, $stateParams, SongPlayer) {

        $rootScope.getAlbumId = $stateParams.getAlbumId;
        this.albumData = Fixtures.getAlbum();
        this.songPlayer = SongPlayer;
  }

  angular
    .module('blocJams')
    .controller('AlbumCtrl', ['Fixtures', '$rootScope', '$stateParams', 'SongPlayer', AlbumCtrl]);
})();
