package ensah.smart_city_manarat_al_moutawassit.Smart_Tourism.dto;

/**
 * UserDTO a Data Transfer Object for User Id, used to bind the id
 * @author ECH-CHARAY Mohamed, MAACHI Bassma, EL JAIMI Walid
 *
 */
public class UserId {
	
	String userId;

	/**
	 * constructor without params
	 */
	public UserId() {}

	/**
	 * constructor with params
	 * @param id
	 */
	public UserId(String id) {
		this.userId = id;
	}

	/**
	 * @return the id
	 */
	public String getuserId() {
		return userId;
	}

	/**
	 * @param id the id to set
	 */
	public void setUserIdd(String id) {
		this.userId = id;
	}

	@Override
	public String toString() {
		StringBuilder builder = new StringBuilder();
		builder.append("UserId [");
		if (userId != null)
			builder.append("userId=").append(userId);
		builder.append("]");
		return builder.toString();
	}

}
