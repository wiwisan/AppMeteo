app.controller('HomeCtrl', ['$scope','$http', function($scope, $http) {

  function getFileData(fileName) {
    var weather = [];

    $http.get('his/'+fileName+'.his')
    .success(function (result) {
      var values;
      var keys;
      var data;

      values  = result.split('\n');
      values.splice(0, 1);
      keys    = values.splice(0, 1)[0].split('\t');

      for (var i = 0; i < values.length; i++) {
        data = values[i].split('\t');
        for (var j = 0; j < data.length; j++) {
          if (typeof weather[keys[j]] === 'undefined') {
            weather[keys[j]] = [];
          }
          weather[keys[j]].push(data[j]);
        }
      }
    });

    return weather;
  }
  
  var weatherData = getFileData("1_ENHANCED_01");
  console.log(weatherData);

}]);