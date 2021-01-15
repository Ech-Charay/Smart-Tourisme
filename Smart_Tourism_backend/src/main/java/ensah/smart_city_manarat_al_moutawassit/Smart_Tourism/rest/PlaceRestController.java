package ensah.smart_city_manarat_al_moutawassit.Smart_Tourism.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import ensah.smart_city_manarat_al_moutawassit.Smart_Tourism.dto.PlaceDTO;
import ensah.smart_city_manarat_al_moutawassit.Smart_Tourism.entity.guide.Beach;
import ensah.smart_city_manarat_al_moutawassit.Smart_Tourism.entity.guide.Hotel;
import ensah.smart_city_manarat_al_moutawassit.Smart_Tourism.entity.guide.Park;
import ensah.smart_city_manarat_al_moutawassit.Smart_Tourism.entity.guide.Place;
import ensah.smart_city_manarat_al_moutawassit.Smart_Tourism.service.PlaceService;

/**
 * Place Endpoint Controller
 * @author ECH-CHARAY Mohamed, MAACHI Bassma, EL JAIMI Walid
 *
 */
@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/places")
public class PlaceRestController {

	@Autowired
	private PlaceService placeService;
	
	/**
	 * Endpoint to create new place (Hotel, Beach or Park)
	 * @param parkDto : the park to create (id is ignored, only fields of the corresponding type of place are filled)
	 * @return the created place (id is now filled after creation)
	 */
	@PostMapping()
	public Place addPlace(@RequestBody PlaceDTO placeDto) {
		Place savedPlace = placeService.save(placeDto);
		return savedPlace;
	}
	
	/**
	 * Endpoint to update an existing place
	 * @param event : the new place (id should not be modified to ensure that the event will be updated and not created as a new place)
	 * @return the updated place
	 */
	@PutMapping()
	public Place modifyPlace(@RequestBody PlaceDTO placeDto) {		
		Place place = placeService.save(placeDto);
		return place;
	}
	
	/**
	 * Endpoint to retrieve a list with all the places in the database
	 * @return a list of places
	 */
	@GetMapping()
	public List<Place> findAll(){
		return placeService.findAll();
	}
	
	/**
	 * Endpoint to retrieve a list with all the hotels in the database
	 * @return a list of hotels
	 */
	@GetMapping("/hotels")
	public List<Hotel> findAllHotels(){
		return placeService.findAllHotels();
	}
	
	/**
	 * Endpoint to retrieve a list with all the beaches in the database
	 * @return a list of beaches
	 */
	@GetMapping("/beaches")
	public List<Beach> findAllBeaches(){
		return placeService.findAllBeaches();
	}
	
	/**
	 * Endpoint to retrieve a list with all the parks in the database
	 * @return a list of parks
	 */
	@GetMapping("/parks")
	public List<Park> findAllParks(){
		return placeService.findAllParks();
	}
}
