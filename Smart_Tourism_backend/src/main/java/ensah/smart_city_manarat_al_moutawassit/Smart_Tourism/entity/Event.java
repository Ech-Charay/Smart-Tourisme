package ensah.smart_city_manarat_al_moutawassit.Smart_Tourism.entity;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.data.annotation.Id;

import ensah.smart_city_manarat_al_moutawassit.Smart_Tourism.entity.users.Visitor;

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
	
	private List<Visitor> guests;


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
	 * @param guests
	 */
	public Event(String id, String name, Date date, String description, String localisation, boolean isPrivate, List<Visitor> guests) {
		this.id = id;
		this.name = name;
		this.date = date;
		this.description = description;
		this.localisation = localisation;
		this.isPrivate = isPrivate;
		this.guests = guests;
	}
	
	/**
	 * constructor with params excluding nbGuests
	 * @param id
	 * @param name
	 * @param date
	 * @param description
	 * @param localisation
	 * @param isPrivate
	 */
	public Event(String id, String name, Date date, String description, String localisation, boolean isPrivate) {
		this.id = id;
		this.name = name;
		this.date = date;
		this.description = description;
		this.localisation = localisation;
		this.isPrivate = isPrivate;
		this.guests = new ArrayList<Visitor>();
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
	public List<Visitor> getGuests() {
		return guests;
	}

	/**
	 * @param nbGuests the nbGuests to set
	 */
	public void setGuests(List<Visitor> guests) {
		if(guests == null)
			this.guests = new ArrayList<Visitor>();
		else
			this.guests = guests;
	}
	
	/**
	 * add a guest to the list of guests
	 * @param guest
	 */
	public void addGuest(Visitor guest) {
		if(guest != null) {
			this.guests.add(guest);
		}
	}
	
	/**
	 * remove a guest from the list of guests
	 * @param guestId: id of the guest to remove
	 */
	public void removeGuest(String guestId) {
		for(int i = 0 ; i < this.guests.size() ; i++) {
			if(this.guests.get(i).getUserId().equals(guestId)) {
				this.guests.remove(i);
				break;
			}
		}
	}

	@Override
	public String toString() {
		final int maxLen = 10;
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
		builder.append("isPrivate=").append(isPrivate).append(", ");
		if (guests != null)
			builder.append("guests=").append(guests.subList(0, Math.min(guests.size(), maxLen)));
		builder.append("]");
		return builder.toString();
	}

}
