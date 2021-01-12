package ensah.smart_city_manarat_al_moutawassit.Smart_Tourism.service;

import java.util.List;

import ensah.smart_city_manarat_al_moutawassit.Smart_Tourism.dto.UserDTO;
import ensah.smart_city_manarat_al_moutawassit.Smart_Tourism.entity.User;
import ensah.smart_city_manarat_al_moutawassit.Smart_Tourism.entity.Visitor;

/**
 * User Service Interface
 * user is either a visitor or a sector.
 * @author ECH-CHARAY Mohamed, MAACHI Bassma, EL JAIMI Walid
 *
 */
public interface UserService {
	
	/**
	 * create/update a User
	 * @param userDto: user attributes to creat in the database or to modify
	 * @return the updated/created user
	 */
	User save(UserDTO userDto);
	
	/**
	 * retrieve the list of all the users in the database
	 * @return list of users
	 */
    List<User> findAll();
    
    /**
	 * retrieve a given user by its username (email)
	 * @return user
	 */
    User findOne(String username);

    /**
	 * retrieve a given visitor by its id
	 * @return visitor
	 */
    Visitor findVisitorById(String id);

}
