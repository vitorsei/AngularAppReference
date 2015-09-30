'use strict';

eventsApp.controller('EditProfileController',
    function EditProfileController($scope, gravatarUrlBuilder) {
        $scope.user = {};

        $scope.getGravatarUrl = function (email) {
            console.log(email);
            console.log(gravatarUrlBuilder.buildGravatarUrl(email));
            return gravatarUrlBuilder.buildGravatarUrl(email);
        }
    }
);
