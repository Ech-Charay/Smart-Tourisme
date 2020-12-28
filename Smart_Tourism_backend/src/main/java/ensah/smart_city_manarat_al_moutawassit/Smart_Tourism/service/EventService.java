package ensah.smart_city_manarat_al_moutawassit.Smart_Tourism.service;

import java.util.List;

import ensah.smart_city_manarat_al_moutawassit.Smart_Tourism.entity.Event;

/**
 * Event Service Interface
 * @author ECH-CHARAY Mohamed, MAACHI Bassma, EL JAIMI Walid
 *
 */
public interface EventService {
	
	/**
	 * create/update an event
	 * @param event : event to create or the modified event to save
	 * @return the updated/created event
	 */
	public Event save(Event event);
	
	/**
	 * delete the event where the id equals the id in params
	 * @param id : id of the event to delete
	 */
	public void deleteById(String id);
	
	/**
	 * retrieve the list of all the events in the database
	 * @return list of events
	 */
	public List<Event> findAll();

	/**
	 * increment nbGuests counter in the event with id == eventId
	 * @param eventId : id of the event
	 * @return the event with its new guests List
	 */
	public Event addGuest(String eventId);

	/**
	 * decrement nbGuests counter in the event with id == eventId
	 * @param eventId : id of the event
	 * @return the event with its new guests List
	 */
	public Event removeGuest(String eventId);
	
}
