(function(){
  function PlayerBarCtrl(Fixtures, $rootScope, $stateParams, SongPlayer){
    
    $rootScope.getAlbumId = $stateParams.getAlbumId;
    this.albumData = Fixtures.getAlbum();
    this.songPlayer = SongPlayer;
  }


  angular
    .module('blocJams')
    .controller('PlayerBarCtrl', ['Fixtures', '$rootScope', '$stateParams', 'SongPlayer', PlayerBarCtrl]);
})();
