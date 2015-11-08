angular.module('starter.Map3Ctrl', [])
  .controller('Map3Ctrl', function ($scope, leafletData, $timeout, $http, $cordovaGeolocation, NcdService, VillageService) {



    NcdService.fetch2().then(
      function (res) {
        angular.extend($scope, {
          markers: res.success ? res.gisdata : null
        })
      },function(err){
          console.log('fail ',err);
      }
    );

    // Get the countries geojson data from a JSON
    $http.get("data/pol_village.json").success(function (data, status) {

      angular.extend($scope, {

        geojson: {
          data: data,
          style: {
            fillColor: "orange",
            weight: 2,
            opacity: 1,
            color: 'gray',
            dashArray: '3',
            fillOpacity: 0.7
          }
        }
      });

    });

    angular.extend($scope, {
      layers: {
        baselayers: {
          osm: {
            name: 'BaseMap',
            type: 'xyz',
            url: 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
          }
        },
        overlays: {
          dm: {
            type: 'group',
            name: 'เบาหวาน',
            visible: false
          },
          ht: {
            type: 'group',
            name: 'ความดัน',
            visible: true
          },

        }
      },

      center: {
        lat: 16,
        lng: 100,
        zoom: 6
      },

      markers: {},

      locate: function () {
        $cordovaGeolocation
          .getCurrentPosition()
          .then(function (position) {
            $scope.center.lat = position.coords.latitude;
            $scope.center.lng = position.coords.longitude;
            $scope.center.zoom = 15;
          });


      }


    });



  });
