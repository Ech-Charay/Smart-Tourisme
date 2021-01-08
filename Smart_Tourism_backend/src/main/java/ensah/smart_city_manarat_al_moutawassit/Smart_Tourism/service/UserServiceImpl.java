package ensah.smart_city_manarat_al_moutawassit.Smart_Tourism.service;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import ensah.smart_city_manarat_al_moutawassit.Smart_Tourism.dao.SectorRepository;
import ensah.smart_city_manarat_al_moutawassit.Smart_Tourism.dao.VisitorRepository;
import ensah.smart_city_manarat_al_moutawassit.Smart_Tourism.dto.UserDTO;
import ensah.smart_city_manarat_al_moutawassit.Smart_Tourism.entity.Sector;
import ensah.smart_city_manarat_al_moutawassit.Smart_Tourism.entity.User;
import ensah.smart_city_manarat_al_moutawassit.Smart_Tourism.entity.Visitor;

/**
 * User Service Implementation
 * UserServiceImpl also implement the UserDetailsService interface in addition to the UserService Interface.
 * @author ECH-CHARAY Mohamed, MAACHI Bassma, EL JAIMI Walid
 *
 */
@Service(value="userService")
public class UserServiceImpl implements UserDetailsService, UserService {
	
	@Autowired
	private VisitorRepository visitorRepository;
	
	@Autowired
	private SectorRepository sectorRepository;
	
	@Autowired
    private BCryptPasswordEncoder bcryptEncoder;

	/**
	 * Create/update a user. If the id is not specified it creates that user in the database.
	 * Otherwise, it searches and updates the user with that id in the database, and if no element is found it creates a new one.
	 * @param userDto : the user to create or the modified user to save
	 * @return the updated/created event
	 */
	@Override
	public User save(UserDTO userDto) {
		
		User user = userDto.getUserFromDTO();
		if(user == null)
			return null;
		user.setPassword(bcryptEncoder.encode(user.getPassword()));

		if(user instanceof Visitor)
			return saveVisitor((Visitor)user);
		else if(user instanceof Sector)
			return saveSector((Sector)user);
		else
			return null;
	}

	private Visitor saveVisitor(Visitor user) {
		//if the id is not specified we create a new element
		if(user.getUserId() == null || user.getUserId().isEmpty()) {
			return visitorRepository.save(user);
		}

		//if the id is specified we search and update the element with that id
		//if no element is found we create a new one
		return visitorRepository.findById(user.getUserId())
				.map(element -> {
					element.setName(user.getName());
					element.setEmail(user.getEmail());
					element.setPassword(user.getPassword());
					element.setAge(user.getAge());
					element.setGender(user.getGender());
					element.setResidence(user.getResidence());
					element.setSpokenLanguages(user.getSpokenLanguages());
					return visitorRepository.save(element);
				})
				.orElseGet(() -> {
					user.setUserId(null);
					return visitorRepository.save(user);
				});
	}

	private Sector saveSector(Sector user) {
		//if the id is not specified we create a new element
		if(user.getUserId() == null || user.getUserId().isEmpty()) {
			return sectorRepository.save(user);
		}

		//if the id is specified we search and update the element with that id
		//if no element is found we create a new one
		return sectorRepository.findById(user.getUserId())
				.map(element -> {
					element.setName(user.getName());
					element.setEmail(user.getEmail());
					element.setPassword(user.getPassword());
					element.setActivityField(user.getActivityField());
					element.setDescription(user.getDescription());
					return sectorRepository.save(element);
				})
				.orElseGet(() -> {
					user.setUserId(null);
					return sectorRepository.save(user);
				});
	}

	/**
	 * retrieve the list of all the users in the database
	 * @return list of users
	 */
	@Override
	public List<User> findAll() {
		List<User> list = new ArrayList<User>();
		list.addAll(sectorRepository.findAll());
		list.addAll(visitorRepository.findAll());
		return list;
	}

	/**
	 * retrieve a given user by its username (email)
	 * @return user
	 */
	@Override
	public User findOne(String email) {
		User user = null;
		user = visitorRepository.findByEmail(email);
		if(user == null)
			user = sectorRepository.findByEmail(email);
		return user;
	}

	/**
	 * loadUserByUsername looks up the user through the DAO repository for the user object and returns a new
	 * org.springframework.security.core.userdetails.User constructed with username, password, and a Set of granted authorities.
	 * @param username the email of the user to fetch
	 * @return org.springframework.security.core.userdetails.User constructed with username, password, and a Set of granted authorities.
	 */
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		 User user = findOne(username);
	        if(user == null){
	            throw new UsernameNotFoundException("Invalid email or password.");
	        }
	        return new org.springframework.security.core.userdetails.User(user.getEmail(), user.getPassword(), getAuthority(user));
	}
	
	private Set<SimpleGrantedAuthority> getAuthority(User user) {
        Set<SimpleGrantedAuthority> authorities = new HashSet<>();
        if(user instanceof Visitor)
        	authorities.add(new SimpleGrantedAuthority("ROLE_VISITOR"));
        else
        	authorities.add(new SimpleGrantedAuthority("ROLE_SECTOR"));
        return authorities;
    }

}
