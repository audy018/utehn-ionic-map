angular.module('starter.Map4Ctrl', [])

  .controller('Map4Ctrl', function ($scope, leafletData, $http, $cordovaGeolocation) {



   var jsonVillGroup = new L.layerGroup();

    var overlays = {
      "หมู่บ้าน":jsonVillGroup
    };

    $http.get("data/pol_village.json").success(function (data, status) {

      leafletData.getMap('map4').then(function (map) {

        L.geoJson(data, {
          visible: true,
          style: function (feature) {
            switch (feature.properties.TAM_CODE) {
              case '10':
                return {
                  fillColor: "orange",
                  weight: 2,
                  opacity: 1,
                  color: 'gray',
                  dashArray: '3',
                  fillOpacity: 0.7
                };
              case '05':
                return {
                  fillColor: "orange",
                  weight: 2,
                  opacity: 1,
                  color: 'gray',
                  dashArray: '3',
                  fillOpacity: 0.7
                };
              default: return {
                weight: 2,
                opacity: 1,
                color: 'gray',
                dashArray: '3',
                fillOpacity: 0.7
              }
            }
          }//style
        }).addTo(jsonVillGroup);
        map.addLayer(jsonVillGroup);
        L.control.layers(null, overlays).addTo(map);

      });
    });






    $scope.locate = function () {
      $cordovaGeolocation
        .getCurrentPosition()
        .then(function (position) {
          leafletData.getMap('map4').then(function (map) {
            map.setView(new L.LatLng(position.coords.latitude, position.coords.longitude), 16);
          });
        });
    };

    angular.extend($scope, {
      center: {
        lat: 16,
        lng: 100,
        zoom: 6
      },
    });


  })// Map4Ctrl


