package ensah.smart_city_manarat_al_moutawassit.Smart_Tourism.dto;

/**
 * AuthToken is a wrapper class for token
 * @author ECH-CHARAY Mohamed, MAACHI Bassma, EL JAIMI Walid
 *
 */
public class AuthToken {

	private String token;

	/**
	 * constructor without params
	 */
	public AuthToken() {}

	/**
	 * constructor with params
	 * @param token
	 */
	public AuthToken(String token) {
		this.token = token;
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

	@Override
	public String toString() {
		StringBuilder builder = new StringBuilder();
		builder.append("AuthToken [");
		if (token != null)
			builder.append("token=").append(token);
		builder.append("]");
		return builder.toString();
	}
	
}
