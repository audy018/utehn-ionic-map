angular.module('starter.services', [])
  .factory('NcdService', function ($q, $timeout, $http) {

    var loadjson1_logic = function(){
      var deferred = $q.defer();
      $timeout(function () {
        $http.get('data/ncd.json')
          .success(function (res) {
            deferred.resolve(res);
          })
          .error(function (err) {
            deferred.reject(err);
          })
      }, 10);
      return deferred.promise;
    };
    var loadjson2_logic = function(){

        return $http.get('data/ncd.json')
          .then(function (res) {
            // success handler
            return res.data;
          },function(res){
            //alert(res.data);
            //$location.path("/tab/about")
          })

    };
    return {
      fetch1: loadjson1_logic,
      fetch2: loadjson2_logic
    }
  })
  .factory('VillageService',function($q, $timeout, $http){
      var loadjson_logic = function(){
        var deferred = $q.defer();
        $timeout(function () {
          $http.get('data/pol_village.json')
            .success(function (res) {
              deferred.resolve(res);
            })
            .error(function (err) {
              deferred.reject(err);
            })
        }, 10);
        return deferred.promise;
      }
    return {
      loadjson : loadjson_logic
    }
  });
