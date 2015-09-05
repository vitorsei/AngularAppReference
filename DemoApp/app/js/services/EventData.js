
//---------------------Uses $http service----------------------
//eventsApp.factory('eventData', function ($http) {
//    return {
//        getEvent: function () {
//            return $http({ method: 'GET', url: 'http://localhost:18774/Event/1' });
//        }
//    };
//});

//---------------------Uses $resource service----------------------
eventsApp.factory('eventData', function ($resource) {
    return {
        getEvent: function () {
            return $resource('http://localhost:18774/Event/:id', { id: '@id' }).get({ id: 1 });
        }
    };
});