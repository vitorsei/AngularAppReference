'use strict';

eventsApp.controller('EventController',
    function EventController($scope) {

        $scope.snippet = '<span style="color: red"> hi there</span>';
        $scope.boolValue = false;
        $scope.myStyle = { color: 'red' };
        $scope.myClass = "blue";
        $scope.buttonDisabled = true;
        
        $scope.event = {
            name: 'Angular Boot Camp',
            date: 1359781015626,
            time: '10:30 am',
            location: {
                address: 'Google Headquartes',
                city: 'Mountain View',
                province: 'CA'
            },
            imageUrl: 'img/angularjs-logo.png',
            sessions: [
                {
                    name: 'Directive Masterclass',
                    creatorName: 'Bob Smith',
                    duration: '4 hours',
                    level: 'Advanced',
                    abstract: 'In this session you will learn the ins and outs of directives!',
                    upVoteCount: 0

                },
                {
                    name: 'Scopes for fun and profit',
                    creatorName: 'Bob Smith',
                    duration: '2 hours',
                    level: 'Intermediate',
                    abstract: 'In this session you will learn the ins and outs of directives!',
                    upVoteCount: 0
                },
                {
                    name: 'Well Behaved Controllers',
                    creatorName: 'Bob Smith',
                    duration: '8 hours',
                    level: 'Beginner',
                    abstract: 'In this session you will learn the ins and outs of directives!',
                    upVoteCount: 0
                }
            ]
        }

        $scope.upVoteSession = function (session) {
            session.upVoteCount++;
        };

        $scope.downVoteSession = function (session) {
            session.upVoteCount--;
        };

    }
);