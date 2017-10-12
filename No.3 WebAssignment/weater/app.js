// 'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [])
    .controller('View1Ctrl', function ($scope, $http) {
        $scope.venueList = new Array();
        $scope.getVenues = function () {
            var placeEntered = document.getElementById("txt_placeName").value;
            if (placeEntered != null && placeEntered != "") {
                //This is the API that gives the list of venues based on the place and search query.
                var handler = $http.get("http://api.openweathermap.org/data/2.5/weather?zip="+placeEntered+",us&appid=c980f7ddb8c5ca2f05c0fc0691ab4259");


                handler.success(function (data) {

                    if (data != null && data.weather != null && data.weather != undefined ) {
                        // Tie an array named "venueList" to the scope which is an array of objects.
                        // Each object should have key value pairs where the keys are "name", "id" , "location" and values are their corresponding values from the response
                        // Marks will be distributed between logic, implementation and UI
                        for(i=0;i<=data.weather.length;i++){
                            $scope.venueList[i]={"main": data.weather[i].main

                            };

                        }


                    }
                })
                handler.error(function (data) {
                    alert("Error code,try again!");
                });
            }
        }
    });
