(function() {
  function seekBar(){
    var calculatePercent = function(seekBar, event) { //calculates horizontal % on seek bar
    var offsetX = event.pageX - seekBar.offset().left;
    var seekBarWidth = seekBar.width();
    var offsetXPercent = offsetX / seekBarWidth;
    offsetXPercent = Math.max(0, offsetXPercent);
    offsetXPercent = Math.min(1, offsetXPercent);
    return offsetXPercent;
    };
    return {
      templateUrl: '/templates/directives/seek_bar.html',
      replace: true, //true->completely replaces directives element, false->replaces contents of element
      restrict: 'E', // restricts directive to E for element, so will look for <seek-bar>, NOT <div seek-bar>
      scope: {   //specifies a new scope to be created for directive, empty ensures a new scope will be only for the directive(isolate-scope->can bind functions from view to scope)
        onChange: '&'
      },
      link: function(scope, element, attributes){ //registers DOM listeners and updating DOM
        scope.value = 0;  //value of seek bar
        scope.max = 100;  //max value
        var seekBar = $(element); //element that matches directive as jQuery object
        attributes.$observe('value', function(newValue){
          scope.value = newValue;
        });
        attributes.$observe('max', function(newValue){
          scope.max = newValue;
        });
        var percentString = function () { //calculates %
          var value = scope.value;
          var max = scope.max;
          var percent = value / max * 100;
          return percent + "%";
        };

        scope.fillStyle = function() {   //returns width of seek bar
          return {width: percentString()};
        };

        scope.thumbStyle = function(){
          return {left: percentString()};
        }

        scope.onClickSeekBar = function(event){ //updates see bar value
          var percent = calculatePercent(seekBar, event);
          scope.value = percent * scope.max;
          notifyOnChange(scope.value);
        };

        scope.trackThumb = function() {  //uses $apply to apply the change in value of scope.value
          $document.bind('mousemove.thumb', function(event) {
            var percent = calculatePercent(seekBar, event);
            scope.$apply(function() {
              scope.value = percent * scope.max;
              notifyOnChange(scope.value);
            });
          });

          $document.bind('mouseup.thumb', function() {
            $document.unbind('mousemove.thumb');
            $document.unbind('mouseup.thumb');
          });
        };

        var notifyOnChange = function(newValue){
          if (typeof scope.onChange === 'function'){
            scope.onChange({value:newValue});
          }
        };
      } //end link function
    };
  }

  angular
  .module('blocJams')
  .directive('seekBar', ['$document', seekBar]); //seekBar is factory function
})();
