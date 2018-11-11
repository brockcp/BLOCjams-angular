(function(){
  function SongPlayer($rootScope, $stateParams, Fixtures){
    var SongPlayer = {}; //this service returns this object making public

    /**
    * @desc current album
    * @type {Object}
    */
    $rootScope.getAlbumId = $stateParams.getAlbumId;
    var currentAlbum = Fixtures.getAlbum();
    console.log($rootScope.getAlbumId);

    /**
    * @desc Buzz object audio file
    * @type {Object}
    */
    var currentBuzzObject = null;

    /**
    * @function setSong
    * @desc Stops current song and loads new audio file/currentBuzzObject
    * @param {Object} song
    */
    var setSong = function(song) {
        if (currentBuzzObject) {
          stopSong(SongPlayer.currentSong);
        }
        currentBuzzObject = new buzz.sound(song.audioUrl, {
            formats: ['m4a'],
            preload: true
        });
        currentBuzzObject.bind('timeupdate', function(){
          $rootScope.$apply(function(){
            SongPlayer.currentTime = currentBuzzObject.getTime();
          });
        });

        SongPlayer.currentSong = song;
     };


     /**
     * @function playSong
     * @desc Plays current song and sets to true
     * @param {Object} song
     */
     var playSong = function(song) {
         currentBuzzObject.play();
         song.playing = true;
     };

     /**
     @function stopSong
     @desc stops current song/sets to null
     @param {Object} song
     */
     var stopSong = function(song){
       currentBuzzObject.stop();
       song.playing = null;
     };

     /**
     * @function getSongIndex
     * @desc gets index of song
     * @param {Object} song
     */
     var getSongIndex = function(song){
       return currentAlbum.songs.indexOf(song);
     };

     /**
     * @desc Active Song object
     * @type {Object}
     */
     SongPlayer.currentSong = null;

     /**
     * @desc Current playback time (in seconds) of currently playing song
     * @type {Number}
     */
     SongPlayer.currentTime = null;

     /**
     * @desc current Volume
     * @type {Number}
     */
     SongPlayer.volume = null;

     /**
     * @function play
     * @desc Plays current song if paused, or selected song
     * @param {Object} song
     */
     SongPlayer.play = function(song) {
        song = song || SongPlayer.currentSong;
        if (SongPlayer.currentSong !== song) {
          setSong(song);
          playSong(song);
        } else if (SongPlayer.currentSong === song) {
          if (currentBuzzObject.isPaused()) {
            playSong(song);
          }
        }
     };

     /**
     * @function pause
     * @desc Pauses current song
     * @param {Object} song
     */
     SongPlayer.pause = function(song) {
        song = song || SongPlayer.currentSong;
         currentBuzzObject.pause();
         song.playing = false;
     };

     /**
     * @function previous
     * @desc goes to previous song
     * @param -> none
     */
     SongPlayer.previous = function(){
       var currentSongIndex = getSongIndex(SongPlayer.currentSong);
       currentSongIndex--;
       if(currentSongIndex < 0){
          stopSong(SongPlayer.currentSong);
       } else {
          var song = currentAlbum.songs[currentSongIndex];
          setSong(song);
          playSong(song);
       }
     };

      /**
      @function next song
      @desc plays next song
      @param -> none
      */
      SongPlayer.next = function(){
        var currentSongIndex = getSongIndex(SongPlayer.currentSong);
        currentSongIndex++;
        if(currentSongIndex > currentAlbum.songs.length){
          stopSong(SongPlayer.currentSong);
        } else {
          var song = currentAlbum.songs[currentSongIndex];
          setSong(song);
          playSong(song);
        }
      };

      /**
      * @function setCurrentTime
      * @desc Set current time (in seconds) of currently playing song
      * @param {Number} time
      */
      SongPlayer.setCurrentTime = function(time) { //checks if currentBuzzObject, if so uses 'setTime' to set to seconds
        if (currentBuzzObject) {
          currentBuzzObject.setTime(time);
        }
      };

      /**
      * @function setVolume
      * @desc sets Volume
      * @param {Number} Volume
      */
      SongPlayer.setVolume = function(volume){
        if(currentBuzzObject){
          currentBuzzObject.setVolume(volume);
        }
      };

     return SongPlayer;
 }

  angular
    .module('blocJams')
    .factory('SongPlayer', ['$rootScope', '$stateParams', "Fixtures", SongPlayer]);
})();
