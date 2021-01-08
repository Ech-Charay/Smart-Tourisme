package ensah.smart_city_manarat_al_moutawassit.Smart_Tourism.entity;

import org.springframework.data.mongodb.core.mapping.Document;

/**
 * Sector Entity for public and private sectors
 * @author ECH-CHARAY Mohamed, MAACHI Bassma, EL JAIMI Walid
 *
 */
@Document
public class Sector extends User {
	
	private String activityField;
	
	private String description;

	/**
	 * constructor without params
	 */
	public Sector() {
		super();
	}

	/**
	 * constructor with params
	 * @param userId
	 * @param email
	 * @param password
	 * @param name
	 * @param activityField
	 * @param description
	 */
	public Sector(String userId, String email, String password, String name, String activityField, String description) {
		super(userId, email, password, name);
		this.activityField = activityField;
		this.description = description;
	}

	/**
	 * @return the activityField
	 */
	public String getActivityField() {
		return activityField;
	}

	/**
	 * @param activityField the activityField to set
	 */
	public void setActivityField(String activityField) {
		this.activityField = activityField;
	}

	/**
	 * @return the description
	 */
	public String getDescription() {
		return description;
	}

	/**
	 * @param description the description to set
	 */
	public void setDescription(String description) {
		this.description = description;
	}

	@Override
	public String toString() {
		StringBuilder builder = new StringBuilder();
		builder.append("Sector [");
		builder.append(super.toString());
		if (activityField != null)
			builder.append("activityField=").append(activityField).append(", ");
		if (description != null)
			builder.append("description=").append(description);
		builder.append("]");
		return builder.toString();
	}
	
}
