package ensah.smart_city_manarat_al_moutawassit.Smart_Tourism.entity;

import org.springframework.data.annotation.Id;

import com.fasterxml.jackson.annotation.JsonIgnore;

/**
 * User base-Entity
 * @author ECH-CHARAY Mohamed, MAACHI Bassma, EL JAIMI Walid
 *
 */
public class User {

	@Id
	private String userId;
	
	private String email;
	
	@JsonIgnore
	private String password;
	
	private String name;
	
	
	/**
	 * constructor without params
	 */
	public User() {}

	/**
	 * constructor with params
	 * @param userId
	 * @param email
	 * @param password
	 * @param name
	 */
	public User(String userId, String email, String password, String name) {
		this.userId = userId;
		this.email = email;
		this.password = password;
		this.name = name;
	}

	/**
	 * @return the userId
	 */
	public String getUserId() {
		return userId;
	}

	/**
	 * @param userId the userId to set
	 */
	public void setUserId(String userId) {
		this.userId = userId;
	}

	/**
	 * @return the email
	 */
	public String getEmail() {
		return email;
	}

	/**
	 * @param email the email to set
	 */
	public void setEmail(String email) {
		this.email = email;
	}

	/**
	 * @return the password
	 */
	public String getPassword() {
		return password;
	}

	/**
	 * @param password the password to set
	 */
	public void setPassword(String password) {
		this.password = password;
	}

	/**
	 * @return the name
	 */
	public String getName() {
		return name;
	}

	/**
	 * @param name the name to set
	 */
	public void setName(String name) {
		this.name = name;
	}

	@Override
	public String toString() {
		StringBuilder builder = new StringBuilder();
		builder.append("User [");
		if (userId != null)
			builder.append("userId=").append(userId).append(", ");
		if (email != null)
			builder.append("email=").append(email).append(", ");
		if (password != null)
			builder.append("password=").append(password).append(", ");
		if (name != null)
			builder.append("name=").append(name).append(", ");
		builder.append("]");
		return builder.toString();
	}
	
}
