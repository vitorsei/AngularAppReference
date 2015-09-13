'use strict';

eventsApp.controller('EventController',
    function EventController($scope, eventData) {

        $scope.sortOrder = 'name';

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

//eventsApp.controller('EventController',
//    function EventController($scope, eventData, $anchorScroll, $cookieStore) {

//        $scope.sortOrder = 'name';
        
//        //---------------------Uses $http service----------------------
//        //eventData.getEvent()
//        //    .success(function (event) { $scope.event = event; })
//        //    .error(function (data, status, heardes, config) {
//        //        $log.warn(data, status, heardes, config);
//        //    });

//        //---------------------Uses $resource service----------------------
//        //$scope.event = eventData.getEvent();
//        eventData.getEvent()
//            .$promise
//            .then(function (event) { $scope.event = event;})
//            .catch(function (response) { console.log(response); })

//        $scope.upVoteSession = function (session) {
//            var sessionsStored = $cookieStore.get('vote');

//            if (typeof sessionsStored === 'undefined') {
//                $cookieStore.put('vote', [session.id]);
//            }
//            else {
//                if (sessionsStored.indexOf(session.id) == -1) {
//                    sessionsStored.push(session.id);
//                    $cookieStore.put('vote', sessionsStored);
//                }
//                else {
//                    alert('You have already voted');
//                    return;
//                }
//            }

//            session.upVoteCount++;
//        };

//        $scope.downVoteSession = function (session) {
//            var sessionsStored = $cookieStore.get('vote');

//            if (typeof sessionsStored === 'undefined') {
//                $cookieStore.put('vote', [session.id]);
//            }
//            else {
//                if (sessionsStored.indexOf(session.id) == -1) {
//                    sessionsStored.push(session.id);
//                    $cookieStore.put('vote', sessionsStored);
//                }
//                else {
//                    alert('You have already voted');
//                    return;
//                }
//            }

//            session.upVoteCount--;
//        };

//        $scope.scrollToSession = function () {
//            $anchorScroll();
//        }

//    }
//);