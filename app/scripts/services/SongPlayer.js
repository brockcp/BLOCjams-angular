(function(){
  function SongPlayer(Fixtures){
    var SongPlayer = {}; //this service return this object making it public to the greater app
    var currentAlbum = Fixtures.getAlbum();


    /**
    * @desc Buzz object audio file
    * @type {Object}
    */
    var currentBuzzObject = null;


    /**
    * @function setSong
    * @desc Stops currently playing song and loads new audio file as currentBuzzObject
    * @param {Object} song
    */
    var setSong = function(song) {
        if (currentBuzzObject) {
            currentBuzzObject.stop();
            SongPlayer.currentSong.playing = null;
        }
        currentBuzzObject = new buzz.sound(song.audioUrl, {
            formats: ['mp3'],
            preload: true
        });
        SongPlayer.currentSong = song;
     };


     /**
     * @function playSong
     * @desc Plays current song and sets song.playing to true
     * @param {Object} song
     */
     var playSong = function(song) {
         currentBuzzObject.play();
         song.playing = true;
     };


     /**
     * @function getSongIndex
     * @desc gets index of song
     * @param {Object} song???
     */
     var getSongIndex = function(song){
       return currentAlbum.songs.indexOf(song);
     };

     /**
     * @desc Active Song object from list of songs
     * @type {Number}
     */
     SongPlayer.currentSong = null;

     /**
     * @function SongPlayer.play
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
     * @param ???
     */
     SongPlayer.previous = function(){
       var currentSongIndex = getSongIndex(SongPlayer.currentSong);
       currentSongIndex--;
       if(currentSongIndex < 0){
         currentBuzzObject.stop();
         SongPlayer.currentSong.playing = null;
       } else {
         var song = currentAlbum.songs[currentSongIndex];
         setSong(song);
         playSong(song);
       }
     };

     return SongPlayer;
 }

  angular
    .module('blocJams')
    .factory('SongPlayer', ["Fixtures", SongPlayer]);
})();
