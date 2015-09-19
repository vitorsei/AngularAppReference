
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
    var resource = $resource('http://localhost:9000/Event/:id', { id: '@id' });

    return {
        getEvent: function (eventId) {
            return resource.get({ id: eventId });
        },
        save: function (event) {
            return resource.save(event);
        },
        getAllEvents: function () {
            return resource.query();
        }
    };
});