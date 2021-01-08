package ensah.smart_city_manarat_al_moutawassit.Smart_Tourism.dto;

/**
 * LoginUser a Data Transfer Object for User entity, used to bind login data.
 * @author ECH-CHARAY Mohamed, MAACHI Bassma, EL JAIMI Walid
 *
 */
public class LoginUser {

	private String email;
	
	private String password;

	/**
	 * constructor without params
	 */
	public LoginUser() {}

	/**
	 * constructor with params
	 * @param email
	 * @param password
	 */
	public LoginUser(String email, String password) {
		this.email = email;
		this.password = password;
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

	@Override
	public String toString() {
		StringBuilder builder = new StringBuilder();
		builder.append("LoginUser [");
		if (email != null)
			builder.append("email=").append(email).append(", ");
		if (password != null)
			builder.append("password=").append(password);
		builder.append("]");
		return builder.toString();
	}
}
