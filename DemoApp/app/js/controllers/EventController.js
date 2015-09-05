'use strict';

eventsApp.controller('EventController',
    function EventController($scope, eventData, $log) {

        $scope.sortOrder = 'name';
        
        //---------------------Uses $http service----------------------
        //eventData.getEvent()
        //    .success(function (event) { $scope.event = event; })
        //    .error(function (data, status, heardes, config) {
        //        $log.warn(data, status, heardes, config);
        //    });

        //---------------------Uses $resource service----------------------
        //$scope.event = eventData.getEvent();
        eventData.getEvent()
            .$promise
            .then(function (event) { $scope.event = event;})
            .catch(function (response) { console.log(response); })

        $scope.upVoteSession = function (session) {
            session.upVoteCount++;
        };

        $scope.downVoteSession = function (session) {
            session.upVoteCount--;
        };

    }
);