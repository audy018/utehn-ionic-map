angular.module('starter.Map2Ctrl', [])
  .controller('Map2Ctrl', function ($scope, leafletData, $cordovaGeolocation) {



    angular.extend($scope, {

      layers:{
        baselayers: {
          osm: {
            name: 'BaseMap',
            type: 'xyz',
            url: 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
          },

        },
        overlays:{
          dm: {
            type: 'group',
            name: 'เบาหวาน',
            visible: true
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

      markers: {

        "m1": {
          "layer" :"dm",
          "lat": 16.5,
          "lng": 100.0456,
          "label": {
            "message": "นายทองดำ = DM",
            "options": {
              "noHide": true
            }
          },
          "icon": {
            "iconUrl": "img/home.png",
            "iconSize": [42, 42]
          }
        },
        "m2": {
          "layer" :"ht",
          "lat": 17.0342,
          "lng": 98.90123,
          "label": {
            "message": "นายทองดำ = HT",
            "options": {
              "noHide": true
            }
          },
          "icon": {
            "iconUrl": "img/home.png",
            "iconSize": [42, 42]
          }
        }

      },


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
