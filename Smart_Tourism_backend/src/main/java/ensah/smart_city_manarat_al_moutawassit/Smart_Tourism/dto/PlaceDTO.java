package ensah.smart_city_manarat_al_moutawassit.Smart_Tourism.dto;

import java.util.Arrays;

import ensah.smart_city_manarat_al_moutawassit.Smart_Tourism.entity.guide.Hotel;
import ensah.smart_city_manarat_al_moutawassit.Smart_Tourism.entity.guide.Park;
import ensah.smart_city_manarat_al_moutawassit.Smart_Tourism.entity.guide.Place;
import ensah.smart_city_manarat_al_moutawassit.Smart_Tourism.entity.guide.Beach;

/**
 * PlaceDTO a Data Transfer Object for Place entity, used to bind data for adding a place to the database. I’ve added a new method getPlaceFromDto to convert it to a Place object.
 * @author ECH-CHARAY Mohamed, MAACHI Bassma, EL JAIMI Walid
 *
 */
public class PlaceDTO {
	
	private String type;

	private String id;
	
	private String name;
	
	private Image[] images;
	
	private double[] location;
	
	private int stars;
	
	private String booking;

	/**
	 * constructor without params
	 */
	public PlaceDTO() {}

	/**
	 * constructor with params
	 * @param type
	 * @param id
	 * @param name
	 * @param images
	 * @param location
	 * @param stars
	 * @param booking
	 */
	public PlaceDTO(String type, String id, String name, Image[] images, double[] location, int stars,
			String booking) {
		this.type = type;
		this.id = id;
		this.name = name;
		this.images = images;
		this.location = location;
		this.stars = stars;
		this.booking = booking;
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
	 * @return the images
	 */
	public Image[] getImages() {
		return images;
	}

	/**
	 * @param images the images to set
	 */
	public void setImages(Image[] images) {
		this.images = images;
	}

	/**
	 * @return the location
	 */
	public double[] getLocation() {
		return location;
	}

	/**
	 * @param location the location to set
	 */
	public void setLocation(double[] location) {
		this.location = location;
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
	
	public Place getPlaceFromDTO() {
		if(type.equals("Hotel"))
			return new Hotel(id, name, images, location, stars, booking);
		else if(type.equals("Beach"))
			return new Beach(id, name, images, location);
		else if(type.equals("Park"))
			return new Park(id, name, images, location);
		else
			return null;
	}

	@Override
	public String toString() {
		final int maxLen = 10;
		StringBuilder builder = new StringBuilder();
		builder.append("PlaceDTO [");
		if (type != null)
			builder.append("type=").append(type).append(", ");
		if (id != null)
			builder.append("id=").append(id).append(", ");
		if (name != null)
			builder.append("name=").append(name).append(", ");
		if (images != null)
			builder.append("images=").append(Arrays.asList(images).subList(0, Math.min(images.length, maxLen)))
					.append(", ");
		if (location != null)
			builder.append("location=")
					.append(Arrays.toString(Arrays.copyOf(location, Math.min(location.length, maxLen)))).append(", ");
		builder.append("stars=").append(stars).append(", ");
		if (booking != null)
			builder.append("booking=").append(booking);
		builder.append("]");
		return builder.toString();
	}
	
}
