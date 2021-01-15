package ensah.smart_city_manarat_al_moutawassit.Smart_Tourism.entity.guide;

import org.springframework.data.mongodb.core.mapping.Document;

import ensah.smart_city_manarat_al_moutawassit.Smart_Tourism.dto.Image;

/**
 * Hotel Entity
 * @author ECH-CHARAY Mohamed, MAACHI Bassma, EL JAIMI Walid
 *
 */
@Document
public class Hotel extends Place {
	
	private int stars;
	
	private String booking;

	/**
	 * constructor without params
	 */
	public Hotel() {}

	/**
	 * constructor with params
	 * @param id
	 * @param name
	 * @param images
	 * @param location
	 * @param stars
	 * @param booking
	 */
	public Hotel(String id, String name, Image[] images, double[] location, int stars, String booking) {
		super(id, name, images, location);
		this.stars = stars;
		this.booking = booking;
	}

	/**
	 * @return the stars
	 */
	public int getStars() {
		return stars;
	}

	/**
	 * @param stars the stars to set
	 */
	public void setStars(int stars) {
		this.stars = stars;
	}

	/**
	 * @return the booking
	 */
	public String getBooking() {
		return booking;
	}

	/**
	 * @param booking the booking to set
	 */
	public void setBooking(String booking) {
		this.booking = booking;
	}

	@Override
	public String toString() {
		StringBuilder builder = new StringBuilder();
		builder.append("Hotel [");
		builder.append(super.toString());
		builder.append("stars=").append(stars).append(", ");
		if (booking != null)
			builder.append("booking=").append(booking);
		builder.append("]");
		return builder.toString();
	}
	
}
