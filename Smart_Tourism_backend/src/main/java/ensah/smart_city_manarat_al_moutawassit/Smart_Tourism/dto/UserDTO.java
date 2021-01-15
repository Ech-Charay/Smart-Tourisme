package ensah.smart_city_manarat_al_moutawassit.Smart_Tourism.dto;

import java.util.Arrays;

import ensah.smart_city_manarat_al_moutawassit.Smart_Tourism.entity.users.Sector;
import ensah.smart_city_manarat_al_moutawassit.Smart_Tourism.entity.users.User;
import ensah.smart_city_manarat_al_moutawassit.Smart_Tourism.entity.users.Visitor;

/**
 * UserDTO a Data Transfer Object for User entity, used to bind registration data. I’ve added a new method getUserFromDto to convert it to a User object.
 * @author ECH-CHARAY Mohamed, MAACHI Bassma, EL JAIMI Walid
 *
 */
public class UserDTO {
	
	private String type;

	private String userId;
	
	private String email;
	
	private String password;
	
	private String name;
	
	private String gender;
	
	private int age;
	
	private String residence;
	
	private String[] spokenLanguages;
	
	private String activityField;
	
	private String description;
	
	/**
	 * constructor without params
	 */
	public UserDTO() {}
	
	/**
	 * constructor with params
	 * @param type
	 * @param userId
	 * @param email
	 * @param password
	 * @param name
	 * @param gender
	 * @param age
	 * @param residence
	 * @param spokenLanguages
	 * @param activityField
	 * @param description
	 */
	public UserDTO(String type, String userId, String email, String password, String name, String gender, int age,
			String residence, String[] spokenLanguages, String activityField, String description) {
		this.type = type;
		this.userId = userId;
		this.email = email;
		this.password = password;
		this.name = name;
		this.gender = gender;
		this.age = age;
		this.residence = residence;
		this.spokenLanguages = spokenLanguages;
		this.activityField = activityField;
		this.description = description;
	}
	
	/**
	 * @return the type
	 */
	public String getType() {
		return type;
	}

	/**
	 * @param type the type to set
	 */
	public void setType(String type) {
		this.type = type;
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

	/**
	 * @return the gender
	 */
	public String getGender() {
		return gender;
	}

	/**
	 * @param gender the gender to set
	 */
	public void setGender(String gender) {
		this.gender = gender;
	}

	/**
	 * @return the age
	 */
	public int getAge() {
		return age;
	}

	/**
	 * @param age the age to set
	 */
	public void setAge(int age) {
		this.age = age;
	}

	/**
	 * @return the residence
	 */
	public String getResidence() {
		return residence;
	}

	/**
	 * @param residence the residence to set
	 */
	public void setResidence(String residence) {
		this.residence = residence;
	}

	/**
	 * @return the spokenLanguages
	 */
	public String[] getSpokenLanguages() {
		return spokenLanguages;
	}

	/**
	 * @param spokenLanguages the spokenLanguages to set
	 */
	public void setSpokenLanguages(String[] spokenLanguages) {
		this.spokenLanguages = spokenLanguages;
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
	
	public User getUserFromDTO() {
		if(type.equals("Visitor"))
			return new Visitor(userId, email, password, name, gender, age, residence, spokenLanguages);
		else if(type.equals("Sector"))
			return new Sector(userId, email, password, name, activityField, description);
		else
			return null;
	}

	@Override
	public String toString() {
		StringBuilder builder = new StringBuilder();
		builder.append("UserDTO [");
		if (type != null)
			builder.append("type=").append(type).append(", ");
		if (userId != null)
			builder.append("userId=").append(userId).append(", ");
		if (email != null)
			builder.append("email=").append(email).append(", ");
		if (password != null)
			builder.append("password=").append(password).append(", ");
		if (name != null)
			builder.append("name=").append(name).append(", ");
		if (gender != null)
			builder.append("gender=").append(gender).append(", ");
		builder.append("age=").append(age).append(", ");
		if (residence != null)
			builder.append("residence=").append(residence).append(", ");
		if (spokenLanguages != null)
			builder.append("spokenLanguages=").append(Arrays.toString(spokenLanguages)).append(", ");
		if (activityField != null)
			builder.append("activityField=").append(activityField).append(", ");
		if (description != null)
			builder.append("description=").append(description);
		builder.append("]");
		return builder.toString();
	}
	
}
