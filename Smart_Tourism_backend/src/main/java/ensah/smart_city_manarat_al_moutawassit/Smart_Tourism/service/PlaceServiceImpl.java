/**
 * 
 */
package ensah.smart_city_manarat_al_moutawassit.Smart_Tourism.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ensah.smart_city_manarat_al_moutawassit.Smart_Tourism.dao.BeachRepository;
import ensah.smart_city_manarat_al_moutawassit.Smart_Tourism.dao.HotelRepository;
import ensah.smart_city_manarat_al_moutawassit.Smart_Tourism.dao.ParkRepository;
import ensah.smart_city_manarat_al_moutawassit.Smart_Tourism.dto.PlaceDTO;
import ensah.smart_city_manarat_al_moutawassit.Smart_Tourism.entity.guide.Beach;
import ensah.smart_city_manarat_al_moutawassit.Smart_Tourism.entity.guide.Hotel;
import ensah.smart_city_manarat_al_moutawassit.Smart_Tourism.entity.guide.Park;
import ensah.smart_city_manarat_al_moutawassit.Smart_Tourism.entity.guide.Place;

/**
 * Place Service Implementation
 * @author ECH-CHARAY Mohamed, MAACHI Bassma, EL JAIMI Walid
 *
 */
@Service
public class PlaceServiceImpl implements PlaceService {
	
	@Autowired
	private HotelRepository hotelRepository;
	
	@Autowired
	private BeachRepository beachRepository;
	
	@Autowired
	private ParkRepository parkRepository;

	/**
	 * Create/update a place. If the id is not specified it creates that place in the database.
	 * Otherwise, it searches and updates the place with that id in the database, and if no element is found it creates a new one.
	 * @param placeDto : the place to create or the modified place to save
	 * @return the updated/created place
	 */
	@Override
	public Place save(PlaceDTO placeDto) {
		Place place = placeDto.getPlaceFromDTO();
		if(place == null)
			return null;
		
		if(place instanceof Hotel)
			return saveHotel((Hotel)place);
		else if(place instanceof Beach)
			return saveBeach((Beach)place);
		else if(place instanceof Park)
			return savePark((Park)place);
		else
			return null;
	}
	
	private Hotel saveHotel(Hotel place) {
		//if the id is not specified we create a new element
		if(place.getId() == null || place.getId().isEmpty()) {
			return hotelRepository.save(place);
		}

		//if the id is specified we search and update the element with that id
		//if no element is found we create a new one
		return hotelRepository.findById(place.getId())
				.map(element -> {
					element.setName(place.getName());
					element.setImages(place.getImages());
					element.setLocation(place.getLocation());
					element.setStars(place.getStars());
					element.setBooking(place.getBooking());
					return hotelRepository.save(element);
				})
				.orElseGet(() -> {
					place.setId(null);
					return hotelRepository.save(place);
				});
	}

	private Beach saveBeach(Beach place) {
		//if the id is not specified we create a new element
		if(place.getId() == null || place.getId().isEmpty()) {
			return beachRepository.save(place);
		}

		//if the id is specified we search and update the element with that id
		//if no element is found we create a new one
		return beachRepository.findById(place.getId())
				.map(element -> {
					element.setName(place.getName());
					element.setImages(place.getImages());
					element.setLocation(place.getLocation());
					return beachRepository.save(element);
				})
				.orElseGet(() -> {
					place.setId(null);
					return beachRepository.save(place);
				});
	}
	
	private Park savePark(Park place) {
		//if the id is not specified we create a new element
		if(place.getId() == null || place.getId().isEmpty()) {
			return parkRepository.save(place);
		}

		//if the id is specified we search and update the element with that id
		//if no element is found we create a new one
		return parkRepository.findById(place.getId())
				.map(element -> {
					element.setName(place.getName());
					element.setImages(place.getImages());
					element.setLocation(place.getLocation());
					return parkRepository.save(element);
				})
				.orElseGet(() -> {
					place.setId(null);
					return parkRepository.save(place);
				});
	}

	/**
	 * retrieve the list of all the places in the database
	 * @return list of places
	 */
	@Override
	public List<Place> findAll() {
		List<Place> list = new ArrayList<Place>();
		list.addAll(hotelRepository.findAll());
		list.addAll(beachRepository.findAll());
		list.addAll(parkRepository.findAll());
		return list;
	}

	/**
	 * retrieve the list of all the hotels in the database
	 * @return list of hotels
	 */
	@Override
	public List<Hotel> findAllHotels() {
		return hotelRepository.findAll();
	}

	/**
	 * retrieve the list of all the beaches in the database
	 * @return list of beaches
	 */
	@Override
	public List<Beach> findAllBeaches() {
		return beachRepository.findAll();
	}

	/**
	 * retrieve the list of all the parks in the database
	 * @return list of parks
	 */
	@Override
	public List<Park> findAllParks() {
		return parkRepository.findAll();
	}

}
