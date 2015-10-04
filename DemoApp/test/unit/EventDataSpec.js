'use strict';

describe('eventData', function() {

    beforeEach(module("eventsApp"));

    it('should issue a GET request to http://localhost:9000/Event/ when getEvent is called and the id is 11',
        inject(function(eventData, $httpBackend){
            $httpBackend.expectGET('http://localhost:9000/Event/11');
            $httpBackend.when('GET', 'http://localhost:9000/Event/11').respond({})
            eventData.getEvent(11);
            $httpBackend.flush();

            $httpBackend.verifyNoOutstandingExpectation();
            $httpBackend.verifyNoOutstandingRequest();
        })
    )

    it('should return the correct data when getEvent is called',
        inject(function(eventData, $httpBackend){
            $httpBackend.when('GET', 'http://localhost:9000/Event/11').respond({ name: 'My Event'});
            var event = eventData.getEvent(11);
            $httpBackend.flush();

            expect(event.name).toBe('My Event');
        })
    )

    it('should issue a GET request to http://localhost:9000/Event when getAllEvents is called ',
        inject(function(eventData, $httpBackend){
            $httpBackend.when('GET', 'http://localhost:9000/Event').respond([{name: 'My Event'}]);
            var events = eventData.getAllEvents();
            $httpBackend.flush();

            expect(events[0].name).toBe('My Event');
        })
    )

    //it('should set the id to 999 when save is called',
    //    inject(function(eventData, $httpBackend){
    //        $httpBackend.expectPOST('http://localhost:9000/Event/');
    //        $httpBackend.when('POST', 'http://localhost:9000/Event/').respond({})
    //        var event = {name : 'My Event'};
    //        eventData.save(event);
    //        $httpBackend.flush();
    //
    //        $httpBackend.verifyNoOutstandingExpectation();
    //        $httpBackend.verifyNoOutstandingRequest();
    //    })
    //)
});
