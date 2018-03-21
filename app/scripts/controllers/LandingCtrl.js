(function() {
    function LandingCtrl() {
        this.heroTitle = "Turn the Music Up!";
    }

    angular
        .module('blocJams')
        .controller('LandingCtrl', LandingCtrl);
})();



// (function(){
//   function LandingCtrl(){
//     this.heroTitle = "Turn the Music Up!"; //this adds 'heroTitle' as a property on the scope
//   }
//
//   angular
//     .module("blocJams")  //no array here b/c already set in app.js. so just retrieves that module
//     .controller("LandingCtrl", LandingCtrl); //2nd arg. callback
// })();


//controllers have 2 params. the second is either array(with callback) or callback
//last item in controller array must be callback
// register controller with directive ng-controller or adding controller property to a .state config
