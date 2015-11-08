angular.module('starter.MapCtrl', [])

  .controller('MapCtrl', function($scope,$cordovaGeolocation) {
    angular.extend($scope,{
      layers: {
        baselayers: {
          xyz: {
            name: 'OpenStreetMap',
            url: 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
            type: 'xyz'
          },
          googleHybrid: {
            name: 'Google Hybrid',
            layerType: 'HYBRID',
            type: 'google'
          },
          mapbox_light: {
            name: 'Mapbox Light',
            url: 'http://api.tiles.mapbox.com/v4/{mapid}/{z}/{x}/{y}.png?access_token={apikey}',
            type: 'xyz',
            layerOptions: {
              apikey: 'pk.eyJ1IjoiYnVmYW51dm9scyIsImEiOiJLSURpX0pnIn0.2_9NrLz1U9bpwMQBhVk97Q',
              mapid: 'bufanuvols.lia22g09'
            }
          },
          bingAerialWithLabels: {
            name: 'BingMap',
            type: 'bing',
            key: 'Aj6XtE1Q1rIvehmjn2Rh1LR2qvMGZ-8vPS9Hn3jCeUiToM77JFnf-kFRzyMELDol',
            layerOptions: {
              type: 'AerialWithLabels'
            }
          },
        },
        overlays: {}
      },
      center :  {
        lat: 16,
        lng: 100,
        zoom: 6
      },
      locate : function(){
        $cordovaGeolocation
          .getCurrentPosition()
          .then(function (position) {
            $scope.center.lat = position.coords.latitude;
            $scope.center.lng = position.coords.longitude;
            $scope.center.zoom = 15;
          });
      }

    });


  })// MapCtrl


