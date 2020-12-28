package ensah.smart_city_manarat_al_moutawassit.Smart_Tourism.entity;

import java.util.Date;

import org.springframework.data.annotation.Id;

/**
 * Event Entity
 * @author ECH-CHARAY Mohamed, MAACHI Bassma, EL JAIMI Walid
 *
 */
public class Event {
	
	@Id
	private String id;
	
	private String name;
	
	private Date date;
	
	private String description;
	
	private String localisation;
	
	private boolean isPrivate;
	
	private int nbGuests;


	/**
	 * constructor without params
	 */
	public Event() {}

	/**
	 * constructor with params including nbGuests
	 * @param id
	 * @param name
	 * @param date
	 * @param description
	 * @param localisation
	 * @param isPrivate
	 * @param nbGuests
	 */
	public Event(String id, String name, Date date, String description, String localisation, boolean isPrivate, int nbGuests) {
		this.id = id;
		this.name = name;
		this.date = date;
		this.description = description;
		this.localisation = localisation;
		this.isPrivate = isPrivate;
		this.nbGuests = nbGuests;
	}
	
	/**
	 * constructor with params excluding nbGuests
	 * @param id
	 * @param name
	 * @param date
	 * @param description
	 * @param localisation
	 * @param isPrivate
	 * @param nbGuests
	 */
	public Event(String id, String name, Date date, String description, String localisation, boolean isPrivate) {
		this.id = id;
		this.name = name;
		this.date = date;
		this.description = description;
		this.localisation = localisation;
		this.isPrivate = isPrivate;
		this.nbGuests = 0;
	}

	/**
	 * @return the id
	 */
	public String getId() {
		return id;
	}

	/**
	 * @param id the id to set
	 */
	public void setId(String id) {
		this.id = id;
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
	 * @return the date
	 */
	public Date getDate() {
		return date;
	}

	/**
	 * @param date the date to set
	 */
	public void setDate(Date date) {
		this.date = date;
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

	/**
	 * @return the localisation
	 */
	public String getLocalisation() {
		return localisation;
	}

	/**
	 * @param localisation the localisation to set
	 */
	public void setLocalisation(String localisation) {
		this.localisation = localisation;
	}

	/**
	 * @return the isPrivate
	 */
	public boolean isPrivate() {
		return isPrivate;
	}

	/**
	 * @param isPrivate the isPrivate to set
	 */
	public void setPrivate(boolean isPrivate) {
		this.isPrivate = isPrivate;
	}

	/**
	 * @return the nbGuests
	 */
	public int getNbGuests() {
		return nbGuests;
	}

	/**
	 * @param nbGuests the nbGuests to set
	 */
	public void setNbGuests(int nbGuests) {
		this.nbGuests = nbGuests;
	}

	@Override
	public String toString() {
		StringBuilder builder = new StringBuilder();
		builder.append("Event [");
		if (id != null)
			builder.append("id=").append(id).append(", ");
		if (name != null)
			builder.append("name=").append(name).append(", ");
		if (date != null)
			builder.append("date=").append(date).append(", ");
		if (description != null)
			builder.append("description=").append(description).append(", ");
		if (localisation != null)
			builder.append("localisation=").append(localisation).append(", ");
		builder.append("isPrivate=").append(isPrivate).append(", nbGuests=").append(nbGuests).append("]");
		return builder.toString();
	}

}
