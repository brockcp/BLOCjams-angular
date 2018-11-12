(function(){
  function PlayerBarCtrl($rootScope, $stateParams, Fixtures, SongPlayer){

    $rootScope.getAlbumId = $stateParams.getAlbumId;
    this.albumData = Fixtures.getAlbum();
    this.songPlayer = SongPlayer;
  }


  angular
    .module('blocJams')
    .controller('PlayerBarCtrl', ["$rootScope", "$stateParams", 'Fixtures', 'SongPlayer', PlayerBarCtrl]);
})();
