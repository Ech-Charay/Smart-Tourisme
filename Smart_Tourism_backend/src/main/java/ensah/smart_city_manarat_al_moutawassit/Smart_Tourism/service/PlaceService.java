/**
 * 
 */
package ensah.smart_city_manarat_al_moutawassit.Smart_Tourism.service;

import java.util.List;

import ensah.smart_city_manarat_al_moutawassit.Smart_Tourism.dto.PlaceDTO;
import ensah.smart_city_manarat_al_moutawassit.Smart_Tourism.entity.guide.Beach;
import ensah.smart_city_manarat_al_moutawassit.Smart_Tourism.entity.guide.Hotel;
import ensah.smart_city_manarat_al_moutawassit.Smart_Tourism.entity.guide.Park;
import ensah.smart_city_manarat_al_moutawassit.Smart_Tourism.entity.guide.Place;

/**
 * Place Service Interface
 * place is either an hotel, a beach or a park.
 * @author ECH-CHARAY Mohamed, MAACHI Bassma, EL JAIMI Walid
 *
 */
public interface PlaceService {
	
	/**
	 * create/update a Place
	 * @param placeDto: place attributes to creat in the database or to modify
	 * @return the updated/created place
	 */
	Place save(PlaceDTO userDto);
	
	/**
	 * retrieve the list of all the places in the database
	 * @return list of places
	 */
    List<Place> findAll();
    
    /**
	 * retrieve the list of all the hotels in the database
	 * @return list of hotels
	 */
    List<Hotel> findAllHotels();
    
    /**
	 * retrieve the list of all the beaches in the database
	 * @return list of beaches
	 */
    List<Beach> findAllBeaches();
    
    /**
	 * retrieve the list of all the parks in the database
	 * @return list of parks
	 */
    List<Park> findAllParks();

}
