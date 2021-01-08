package ensah.smart_city_manarat_al_moutawassit.Smart_Tourism.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import ensah.smart_city_manarat_al_moutawassit.Smart_Tourism.config.TokenProvider;
import ensah.smart_city_manarat_al_moutawassit.Smart_Tourism.dto.AuthToken;
import ensah.smart_city_manarat_al_moutawassit.Smart_Tourism.dto.LoginUser;
import ensah.smart_city_manarat_al_moutawassit.Smart_Tourism.dto.UserDTO;
import ensah.smart_city_manarat_al_moutawassit.Smart_Tourism.entity.User;
import ensah.smart_city_manarat_al_moutawassit.Smart_Tourism.service.UserService;

/**
 * Authentication Endpoint Controller
 * @author ECH-CHARAY Mohamed, MAACHI Bassma, EL JAIMI Walid
 *
 */
@RestController
@RequestMapping("/users")
public class UsersRestController {

	@Autowired
	private UserService userService;
	
	@Autowired
    private AuthenticationManager authenticationManager;
	
	@Autowired
    private TokenProvider jwtTokenUtil;
	
	/**
	 * Endpoint to create new user (Visitor or Sector)
	 * @param userDto : the user to create (id is ignored, only fields of the corresponding type of user are filled)
	 * @return the created user (id is now filled after creation)
	 */
	@PostMapping("/register")
	public User signUp(@RequestBody UserDTO userDto) {
		User savedUser = userService.save(userDto);
		return savedUser;
	}
	
	/**
	 * Endpoint to get authenticated
	 * @param loginUser : login and password 
	 * @return AuthToken: it is returned to be used by the client in its future requests
	 */
	@PostMapping("/login")
	public ResponseEntity<?> signIn(@RequestBody LoginUser loginUser) {
		final Authentication authentication = authenticationManager.authenticate(
				new UsernamePasswordAuthenticationToken(
						loginUser.getEmail(),
						loginUser.getPassword()
						)
				);
		SecurityContextHolder.getContext().setAuthentication(authentication);
		final String token = jwtTokenUtil.generateToken(authentication);
		return ResponseEntity.ok(new AuthToken(token));
	}
	
}
