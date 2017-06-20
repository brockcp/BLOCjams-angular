(function() {
     function config($stateProvider, $locationProvider) { //'config block' to ensure accessiblilty thruout app. -> only providers and constants

       $locationProvider  //configs how to handle urls('paths')
            .html5Mode({
                enabled: true, //disable hashbangs
                requireBase: false //avoid common $location errors
            });
        $stateProvider //configs state behaviour(component of ui-router)
            .state('landing', {
                url: '/',
                controller:'LandingCtrl as landing',
                templateUrl: '/templates/landing.html'
              })
            .state('album', {
                url: '/album',
                controller: 'AlbumCtrl as album',
                templateUrl: '/templates/album.html'
              })
            .state('collection',{
                url: '/collection',
                controller: 'CollectionCtrl as collection',
                templateUrl: '/templates/collection.html'
              });
     }

     angular
         .module('blocJams', ['ui.router'])
         .config(config);
 })();
