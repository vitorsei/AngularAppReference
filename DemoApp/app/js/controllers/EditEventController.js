'use strict';

eventsApp.controller('EditEventController',
    function EditEventController($scope, eventData) {

        $scope.saveEvent = function (event, newEventForm) {
            if (newEventForm.$valid) {
                eventData.save(event)
                    .$promise
                    .then(function (response) { window.location = 'EventDetails.html'; })
                    .catch(function(response) { console.log('failure', response)} );
            }
        };

        $scope.cancelEdit = function () {
            window.location = 'EventDetails.html';
        };
    }
);