package ensah.smart_city_manarat_al_moutawassit.Smart_Tourism.dto;

import ensah.smart_city_manarat_al_moutawassit.Smart_Tourism.entity.User;

/**
 * AuthToken is a wrapper class for token
 * @author ECH-CHARAY Mohamed, MAACHI Bassma, EL JAIMI Walid
 *
 */
public class AuthResponse {

	private String token;
	private User user;

	/**
	 * constructor without params
	 */
	public AuthResponse() {}

	/**
	 * constructor with params
	 * @param token
	 * @param user
	 */
	public AuthResponse(String token, User user) {
		this.token = token;
		this.user = user;
	}

	/**
	 * @return the token
	 */
	public String getToken() {
		return token;
	}

	/**
	 * @param token the token to set
	 */
	public void setToken(String token) {
		this.token = token;
	}

	/**
	 * @return the user
	 */
	public User getUser() {
		return user;
	}

	/**
	 * @param user the user to set
	 */
	public void setUser(User user) {
		this.user = user;
	}

	@Override
	public String toString() {
		StringBuilder builder = new StringBuilder();
		builder.append("AuthResponse [");
		if (token != null)
			builder.append("token=").append(token).append(", ");
		if (user != null)
			builder.append("user=").append(user.toString());
		builder.append("]");
		return builder.toString();
	}
	
	
}
