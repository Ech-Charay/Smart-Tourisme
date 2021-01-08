package ensah.smart_city_manarat_al_moutawassit.Smart_Tourism.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import ensah.smart_city_manarat_al_moutawassit.Smart_Tourism.entity.Event;
import ensah.smart_city_manarat_al_moutawassit.Smart_Tourism.service.EventService;

/**
 * Event Endpoint Controller
 * @author ECH-CHARAY Mohamed, MAACHI Bassma, EL JAIMI Walid
 *
 */
@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/event")
public class EventsRestController {
	
	@Autowired
	private EventService eventService;
	
	/**
	 * Endpoint to create new event
	 * @param event : the event to create (id is ignored)
	 * @return the created event (id is now filled after creation)
	 */
	@PostMapping()
	public Event addEvent(@RequestBody Event event) {
		eventService.save(event);		
		return event;
	}
	
	/**
	 * Endpoint to update an existing event
	 * @param event : the new event (id should not be modified to ensure that the event will be updated and not created as a new event)
	 * @return the updated event
	 */
	@PutMapping()
	public Event modifyEvent(@RequestBody Event event) {		
		eventService.save(event);
		return event;
	}
	
	/**
	 * Endpoint to delete a given event by its id
	 * @param id : id of the event to delete
	 */
	@DeleteMapping("/{id}")
	public void deleteEvent(@PathVariable String id) {
		eventService.deleteById(id);
	}

	/**
	 * Endpoint to retrieve a list with all the events in the database
	 * @return a list of events
	 */
	@GetMapping()
	public List<Event> findAll(){
		return eventService.findAll();
	}
	
	/**
	 * Endpoint to add a visitor to the guests list of an event
	 * @param eventId : id of the event
	 * @return the event with its new guests list
	 */
	@PutMapping("/{eventId}:interested")
	public Event addGuest(@PathVariable String eventId) {
		return eventService.addGuest(eventId);
	}
	
	/**
	 * Endpoint to remove a visitor from the guests list of an event
	 * @param eventId : id of the event
	 * @return the event with its new guests list
	 */
	@PutMapping("/{eventId}:not_interested")
	public Event removeGuest(@PathVariable String eventId) {
		return eventService.removeGuest(eventId);
	}
}
