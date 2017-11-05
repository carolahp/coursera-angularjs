(function () {
'use strict';
var separator = ',';

angular.module('LunchCheck', [])
.controller('LunchCheckController', DIController);

DIController.$inject = ['$scope'];
function DIController($scope) {
  $scope.dishes = "";

  $scope.showMessage = function () {
    var dishesArr = arrayFromList($scope.dishes, separator);
    var ndishes = dishesArr.length;
    var msg = "";
    if(!arrayContainsElements(dishesArr)) {
      msg = "Please enter data first";
    }
    else {
      if(ndishes <= 3) {
        msg = "Enjoy!";
      }
      else {
        msg = "Too Much!";
      }
    }
    $scope.messageForUser =msg;
  };
  /* returns true if the array contains at least 1 element different from empty string, returns false otherwise*/
  function arrayContainsElements(arr){
    for(var i=0;i<arr.length;i++){
      if(arr[i] !== "")
      return true;
    }
    return false;
  };

  /* returns an array containing all the elements specified in the list, separated by sep*/
  function arrayFromList(list, sep){
    //match separator typos (repetitions) between list, considering spaces
    var re1 = new RegExp( "\\"+ sep +"[ *\\"+ sep +"*]*\\" + sep, "g");
    //match separator typos (repetitions) at the beginnigns and at the end of the list, considering spaces
    var re2 = new RegExp( "(^[ *\\"+ sep +"*]*|[ *\\"+ sep +"*]*$)", "g");

    var arr = (list)
              .replace( re1, ",")
              .replace( re2, "");
    return arr.split(sep);
  };
}

})();
