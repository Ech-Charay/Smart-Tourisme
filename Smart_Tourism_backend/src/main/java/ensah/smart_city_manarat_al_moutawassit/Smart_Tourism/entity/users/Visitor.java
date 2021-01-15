package ensah.smart_city_manarat_al_moutawassit.Smart_Tourism.entity.users;

import java.util.Arrays;

import org.springframework.data.mongodb.core.mapping.Document;

/**
 * Visitor Entity
 * @author ECH-CHARAY Mohamed, MAACHI Bassma, EL JAIMI Walid
 *
 */
@Document
public class Visitor extends User {
	
	private String gender;
	
	private int age;
	
	private String residence;
	
	private String[] spokenLanguages;

	/**
	 * constructor without params
	 */
	public Visitor() {
		super();
	}

	/**
	 * constructor with params
	 * @param userId
	 * @param email
	 * @param password
	 * @param name
	 * @param gender
	 * @param age
	 * @param residence
	 * @param spokenLanguages
	 */
	public Visitor(String userId, String email, String password, String name, String gender, int age, String residence,
			String[] spokenLanguages) {
		super(userId, email, password, name);
		this.gender = gender;
		this.age = age;
		this.residence = residence;
		this.spokenLanguages = spokenLanguages;
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

	@Override
	public String toString() {
		StringBuilder builder = new StringBuilder();
		builder.append("Visitor [");
		builder.append(super.toString());
		if (gender != null)
			builder.append("gender=").append(gender).append(", ");
		builder.append("age=").append(age).append(", ");
		if (residence != null)
			builder.append("residence=").append(residence).append(", ");
		if (spokenLanguages != null)
			builder.append("spokenLanguages=").append(Arrays.toString(spokenLanguages));
		builder.append("]");
		return builder.toString();
	}
	
}
