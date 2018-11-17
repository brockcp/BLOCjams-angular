(function(){
  function Fixtures($rootScope){
    var Fixtures = {};

    var musicLibrary = [
      {
      id:0,
      title: 'Summer In Abaddon',
      artist: 'Pinback',
      label: 'Alternative',
      year: '2004',
      albumArtUrl: 'assets/images/album_covers/SummerInAbaddon.png',
      songs: [
        { title: 'Non Photo-Blue', duration: 34, audioUrl: 'assets/music/Non-Photo-Blue'},
        { title: 'Fortress', duration: 299, audioUrl: 'assets/music/Fortress'},
        { title: 'Syracuse', duration: 230, audioUrl: 'assets/music/Syracuse'},
        { title: 'Sender', duration: 298, audioUrl: 'assets/music/Sender'}
      ]
      },
      {
      id:1,
      title: 'Strange Trails',
      artist: 'Lord Huron',
      label: 'Indie Rock',
      year: '2015',
      albumArtUrl: 'assets/images/album_covers/StrangeTrails.png',
      songs: [
        {title: 'Fool For Love', duration:275, audioUrl: 'assets/music/FoolForLove'},
        {title: 'Dead Man\'s Hand', duration:261, audioUrl: 'assets/music/DeadMansHand'},
        {title: 'The Night We Met', duration: 203, audioUrl: 'assets/music/TheNightWeMet'},
        {title: 'Way Out There', duration:250, audioUrl: 'assets/music/WayOutThere'}
      ]
      },
      {
      id:2,
      title: 'Ok Computer',
      artist: 'Radiohead',
      label: 'Alternative',
      year: '1997',
      albumArtUrl: 'assets/images/album_covers/OkComputer.png',
      songs: [
        {title: 'Airbag', duration:284, audioUrl: 'assets/music/Airbag'},
        {title: 'Paranoid Android', duration:384, audioUrl: 'assets/music/ParanoidAndroid'},
        {title: 'Subterranean Homesick Alien', duration:268, audioUrl: 'assets/music/SubterraneanHomesickAlien'},
        {title: 'Let Down', duration:299, audioUrl: 'assets/music/LetDown'},
        {title: 'Karma Police', duration:262, audioUrl: 'assets/music/KarmaPolice'},
        {title: 'No Surprises', duration:229, audioUrl: 'assets/music/NoSurprises'}
      ]
      },
      {
      id:3,
      title: 'Summer Winter',
      artist: 'Fialta',
      label: 'Alternative',
      year: '2013',
      albumArtUrl: 'assets/images/album_covers/SummerWinter.png',
      songs: [
        {title: 'Photographs', duration:235, audioUrl: 'assets/music/Photographs'},
        {title: 'Baby, I', duration:227, audioUrl: 'assets/music/BabyI'},
        {title: 'Cars', duration:219, audioUrl: 'assets/music/Cars'}
      ]
      }
    ];

    var SummerInAbaddon ={
            id:0,
            title: 'Summer In Abaddon',
            artist: 'Pinback',
            label: 'Alternative',
            year: '2004',
            albumArtUrl: 'assets/images/album_covers/SummerInAbaddon.png',
            songs: [
              { title: 'Non Photo-Blue', duration: 34, audioUrl: 'assets/music/Non-Photo-Blue'},
              { title: 'Fortress', duration: 27, audioUrl: 'assets/music/Fortress'},
              { title: 'Syracuse', duration: 41, audioUrl: 'assets/music/Syracuse'},
              { title: 'Sender', duration: 33, audioUrl: 'assets/music/Sender'}
            ]
      }
    var StrangeTrails = {
            id:1,
            title: 'Strange Trails',
            artist: 'Lord Huron',
            label: 'Indie Rock',
            year: '2015',
            albumArtUrl: 'assets/images/album_covers/StrangeTrails.png',
            songs: [
              {title: 'Fool For Love', duration:37, audioUrl: 'assets/music/FoolForLove'},
              {title: 'Dead Man\'s Hand', duration:30, audioUrl: 'assets/music/DeadMansHand'},
              {title: 'The Night We Met', duration: 22, audioUrl: 'assets/music/TheNightWeMet'},
              {title: 'Way Out There', duration:27, audioUrl: 'assets/music/WayOutThere'}
            ]
      }
    var OkComputer = {
            id:2,
            title: 'Ok Computer',
            artist: 'Radiohead',
            label: 'Alternative',
            year: '1997',
            albumArtUrl: 'assets/images/album_covers/OkComputer.png',
            songs: [
              {title: 'Airbag', duration:38, audioUrl: 'assets/music/Airbag'},
              {title: 'Paranoid Android', duration:50, audioUrl: 'assets/music/ParanoidAndroid'},
              {title: 'Subterranean Homesick Alien', duration:27, audioUrl: 'assets/music/SubterraneanHomesickAlien'},
              {title: 'Let Down', duration:32, audioUrl: 'assets/music/LetDown'},
              {title: 'Karma Police', duration:29, audioUrl: 'assets/music/KarmaPolice'},
              {title: 'No Surprises', duration:20, audioUrl: 'assets/music/NoSurprises'}
            ]
      };
    var SummerWinter = {
          id:3,
          title: 'Summer Winter',
          artist: 'Fialta',
          label: 'Alternative',
          year: '2013',
          albumArtUrl: 'assets/images/album_covers/SummerWinter.png',
          songs: [
            {title: 'Photographs', duration:31, audioUrl: 'assets/music/Photographs'},
            {title: 'Baby, I', duration:27, audioUrl: 'assets/music/BabyI'},
            {title: 'Cars', duration:30, audioUrl: 'assets/music/Cars'}
          ]
    };
    var catalog = [SummerInAbaddon, StrangeTrails, OkComputer, SummerWinter]

    Fixtures.getAlbum = function(){
      var chosenAlbumId = $rootScope.getAlbumId;
      return catalog[chosenAlbumId];
    };
    Fixtures.getCollection = function() {
        var albumCollection = [];
        for (var i=0; i < catalog.length; i++) {
            albumCollection.push(catalog[i]);
        }
        return albumCollection;
    };

    return Fixtures;
  }
  angular
  .module('blocJams')
  .factory('Fixtures', ['$rootScope', Fixtures]); //designates use of Factory recipe
})();
