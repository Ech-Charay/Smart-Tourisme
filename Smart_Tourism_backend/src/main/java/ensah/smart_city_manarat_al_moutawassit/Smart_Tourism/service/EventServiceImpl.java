package ensah.smart_city_manarat_al_moutawassit.Smart_Tourism.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ensah.smart_city_manarat_al_moutawassit.Smart_Tourism.dao.EventRepository;
import ensah.smart_city_manarat_al_moutawassit.Smart_Tourism.entity.Event;
import ensah.smart_city_manarat_al_moutawassit.Smart_Tourism.entity.Visitor;

/**
 * Event Service Implementation
 * @author ECH-CHARAY Mohamed, MAACHI Bassma, EL JAIMI Walid
 *
 */
@Service
public class EventServiceImpl implements EventService {
	
	@Autowired
	private EventRepository repository;
	
	@Autowired UserService userService;

	/**
	 * Create/update an event. If the id is not specified it creates that event in the database.
	 * Otherwise, it searches and updates the event with that id in the database, and if no element is found it creates a new one.
	 * @param event : the event to create or the modified event to save
	 * @return the updated/created event
	 */
	@Override
	public Event save(Event event) {
		//if the id is not specified we create a new element
		if(event.getId() == null || event.getId().isEmpty()) {
			event.setGuests(null);
			return repository.save(event);
		}
		
		//if the id is specified we search and update the element with that id
		//if no element is found we create a new one
		return repository.findById(event.getId())
			.map(element -> {
				element.setName(event.getName());
				element.setDate(event.getDate());
				element.setDescription(event.getDescription());
				element.setLocalisation(event.getLocalisation());
				element.setPrivate(event.isPrivate());
				element.setGuests(event.getGuests());
				return repository.save(element);
			})
			.orElseGet(() -> {
				event.setId(null);
				event.setGuests(null);
				return repository.save(event);
			});
	}

	/**
	 * delete the event where the id equals the id in params
	 * @param id : the id of the event to delete
	 */
	@Override
	public void deleteById(String id) {
		repository.deleteById(id);
	}

	/**
	 * retrieve the list of all the events in the database
	 * @return list of events
	 */
	@Override
	public List<Event> findAll() {
		return repository.findAll();
	}
	
	/**
	 * retrieve a single event by its id from the database
	 * @return event
	 */
	@Override
	public Event findOne(String eventId) {
		Optional<Event> result = repository.findById(eventId);
		Event event = null;
		if(result.isPresent())
			event = result.get();
		return event;
	}

	/**
	 * increment nbGuests counter in the event with id == eventId
	 * @param eventId : id of the event
	 * @param userId : id of the guest to add
	 * @return the event with its new guests List
	 */
	@Override
	public Event addGuest(String eventId, String userId) {
		return repository.findById(eventId)
				.map(event -> {
					Visitor guest = userService.findVisitorById(userId);
					//System.out.println(guest.toString());
					event.addGuest(guest);
					return repository.save(event);
				})
				.orElseGet(() -> {
					return null;
				});
	}

	/**
	 * decrement nbGuests counter in the event with id == eventId
	 * @param eventId : id of the event
	 * @param userId : id of the guest to remove
	 * @return the event with its new guests List
	 */
	@Override
	public Event removeGuest(String eventId, String userId) {
		return repository.findById(eventId)
				.map(event -> {
					event.removeGuest(userId);
					return repository.save(event);
				})
				.orElseGet(() -> {
					return null;
				});
	}

}
