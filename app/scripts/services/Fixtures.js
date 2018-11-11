(function(){
  function Fixtures($rootScope){
    var Fixtures = {};

    var musicLibrary = [
          {
            id:0,
            title: 'OK Computer',
            artist: 'Radiohead',
            label: 'Alternative',
            year: '1997',
            albumArtUrl: 'assets/images/album_covers/003.png',
            songs: [
              { title: 'Blueairbag', duration: 161.71, audioUrl: 'assets/music/airbag'},
              { title: 'Green', duration: 103.96, audioUrl: 'assets/music/green'},
              { title: 'Red', duration: 268.45, audioUrl: 'assets/music/red'},
              { title: 'Pink', duration: 153.14, audioUrl: 'assets/music/pink'},
              { title: 'Magenta', duration: 374.22, audioUrl: 'assets/music/magenta'}
              // {title: 'Airbag', duration:'3:43'},
              // {title: 'Paranoid Android', duration:'4;44'},
              // {title: 'Subterranean Homesick Alien', duration:'6:23'},
              // {title: 'Exit Music', duration:'8:32'},
              // {title: 'Let Down', duration:'5:15'},
              // {title: 'Karma Police', duration:'3:35'},
              // {title: 'Fitter Happier', duration:'2:25'},
              // {title: 'Electioneering', duration:'5:55'}
            ]},
          {
            id:1,
            title: 'Information Retrieved',
            artist: 'Pinback',
            label: 'Alternative',
            year: '2012',
            albumArtUrl: 'assets/images/album_covers/002.png',
            songs: [
              {title: 'Proceed To Memory', duration:'3:43'},
              {title: 'Glide', duration:'4;44'},
              {title: 'Drawstring', duration:'6:23'},
              {title: 'Sherman', duration:'5:32'},
              {title: 'His Phase', duration:'5:65'},
              {title: 'Diminished', duration:'5:65'},
              {title: 'True North', duration:'5:65'}
            ]},
          {
            id:2,
            title: 'The Chief Assassin To The Sinister',
            artist: 'Three Mile Pilot',
            label: 'Rock',
            year: '1995',
            albumArtUrl: 'assets/images/album_covers/004.png',
            songs: [
              {title: 'Shang Vs. Hanger', duration:'3:43'},
              {title: 'Circumcised', duration:'4;44'},
              {title: 'Aqua-Magnetic', duration:'6:23'},
              {title: 'The Chief Assassin to the Sinister', duration:'5:32'},
              {title: '97-MT', duration:'5:65'}
            ]},
          {
          id:3,
          title: 'Lonesome Dreams',
          artist: 'Lord Huron',
          label: 'Alternative',
          year: '2012',
          albumArtUrl: 'assets/images/album_covers/001.png',
          songs: [
            {title: 'Ends of the Earth', duration:'3:43'},
            {title: 'Time to Run', duration:'4;44'},
            {title: 'Lonesome Dreams', duration:'6:23'},
            {title: 'She Lit a Fire', duration:'5:32'},
            {title: 'I Will Be Back One Day', duration:'5:65'}
          ]}
        ];

        var album1 =
              {
                id:0,
                title: 'OK Computer',
                artist: 'Radiohead',
                label: 'Alternative',
                year: '1997',
                albumArtUrl: 'assets/images/album_covers/003.png',
                songs: [
                  { title: 'Blueairbag', duration: 161.71, audioUrl: 'assets/music/airbag'},
                  { title: 'Green', duration: 103.96, audioUrl: 'assets/music/green'},
                  { title: 'Red', duration: 268.45, audioUrl: 'assets/music/red'},
                  { title: 'Pink', duration: 153.14, audioUrl: 'assets/music/pink'},
                  { title: 'Magenta', duration: 374.22, audioUrl: 'assets/music/magenta'}
                  // {title: 'Airbag', duration:'3:43'},
                  // {title: 'Paranoid Android', duration:'4;44'},
                  // {title: 'Subterranean Homesick Alien', duration:'6:23'},
                  // {title: 'Exit Music', duration:'8:32'},
                  // {title: 'Let Down', duration:'5:15'},
                  // {title: 'Karma Police', duration:'3:35'},
                  // {title: 'Fitter Happier', duration:'2:25'},
                  // {title: 'Electioneering', duration:'5:55'}
                ]}
        var album2 =
              {
                id:1,
                title: 'Information Retrieved',
                artist: 'Pinback',
                label: 'Alternative',
                year: '2012',
                albumArtUrl: 'assets/images/album_covers/002.png',
                songs: [
                  {title: 'Proceed To Memory', duration:'3:43'},
                  {title: 'Glide', duration:'4;44'},
                  {title: 'Drawstring', duration:'6:23'},
                  {title: 'Sherman', duration:'5:32'},
                  {title: 'His Phase', duration:'5:65'},
                  {title: 'Diminished', duration:'5:65'},
                  {title: 'True North', duration:'5:65'}
                ]}
        var album3 =
              {
                id:2,
                title: 'The Chief Assassin To The Sinister',
                artist: 'Three Mile Pilot',
                label: 'Rock',
                year: '1995',
                albumArtUrl: 'assets/images/album_covers/004.png',
                songs: [
                  {title: 'Shang Vs. Hanger', duration:'3:43'},
                  {title: 'Circumcised', duration:'4;44'},
                  {title: 'Aqua-Magnetic', duration:'6:23'},
                  {title: 'The Chief Assassin to the Sinister', duration:'5:32'},
                  {title: '97-MT', duration:'5:65'}
                ]}
        var album4 =
              {
              id:3,
              title: 'Lonesome Dreams',
              artist: 'Lord Huron',
              label: 'Alternative',
              year: '2012',
              albumArtUrl: 'assets/images/album_covers/001.png',
              songs: [
                {title: 'Ends of the Earth', duration:'3:43'},
                {title: 'Time to Run', duration:'4;44'},
                {title: 'Lonesome Dreams', duration:'6:23'},
                {title: 'She Lit a Fire', duration:'5:32'},
                {title: 'I Will Be Back One Day', duration:'5:65'}
              ]}
        var catalog = [album1, album2, album3, album4]

        var albumPicasso = {
            id:0,
            title: 'The Colors',
            artist: 'Pablo Picasso',
            label: 'Cubism',
            year: '1881',
            albumArtUrl: '/assets/images/album_covers/20.png',
            songs: [
                { title: 'Blue', duration: 161.71, audioUrl: 'assets/music/blue'},
                { title: 'Green', duration: 103.96, audioUrl: 'assets/music/green'},
                { title: 'Red', duration: 268.45, audioUrl: 'assets/music/red'},
                { title: 'Pink', duration: 153.14, audioUrl: 'assets/music/pink'},
                { title: 'Magenta', duration: 374.22, audioUrl: 'assets/music/magenta'}
            ]
        };
        var albumMarconi = {
            id:1,
            title: 'The Numbers',
            artist: 'Number Man',
            label: 'EM',
            year: '1909',
            albumArtUrl: '/assets/images/album_covers/19.png',
            songs: [
              { title: 'one', duration: 161.71, audioUrl: 'assets/music/blue'},
              { title: 'two', duration: 103.96, audioUrl: 'assets/music/green'},
              { title: 'three', duration: 268.45, audioUrl: 'assets/music/red'},
              { title: 'four', duration: 153.14, audioUrl: 'assets/music/pink'},
              { title: 'five', duration: 374.22, audioUrl: 'assets/music/magenta'}
            ]
        };
    //console.log(albumPicasso);
        var albumss = [albumPicasso, albumMarconi];

    Fixtures.getAlbum = function(){
      var chosenAlbumId = $rootScope.getAlbumId;
      return albumss[chosenAlbumId];
    };
    Fixtures.getCollection = function() {
        var albumCollection = [];
        for (var i=0; i < albumss.length; i++) {
            albumCollection.push(albumss[i]);
        }
        return albumCollection;
    };

    return Fixtures;
  }
  angular
  .module('blocJams')
  .factory('Fixtures', ['$rootScope', Fixtures]); //designates use of Factory recipe
})();
