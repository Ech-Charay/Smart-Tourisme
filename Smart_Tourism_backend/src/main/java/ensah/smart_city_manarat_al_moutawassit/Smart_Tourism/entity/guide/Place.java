package ensah.smart_city_manarat_al_moutawassit.Smart_Tourism.entity.guide;

import java.util.Arrays;

import org.springframework.data.annotation.Id;

import ensah.smart_city_manarat_al_moutawassit.Smart_Tourism.dto.Image;

/**
 * Place base-Entity
 * @author ECH-CHARAY Mohamed, MAACHI Bassma, EL JAIMI Walid
 *
 */
public abstract class Place {
	
	@Id
	private String id;
	
	private String name;
	
	private Image[] images;
	
	private double[] location;

	/**
	 * constructor without params
	 */
	public Place() {}

	/**
	 * constructor with params
	 * @param id
	 * @param name
	 * @param images
	 * @param location
	 */
	public Place(String id, String name, Image[] images, double[] location) {
		this.id = id;
		this.name = name;
		this.images = images;
		this.location = location;
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

	@Override
	public String toString() {
		final int maxLen = 10;
		StringBuilder builder = new StringBuilder();
		builder.append("Place [");
		if (id != null)
			builder.append("id=").append(id).append(", ");
		if (name != null)
			builder.append("name=").append(name).append(", ");
		if (images != null)
			builder.append("images=").append(Arrays.asList(images).subList(0, Math.min(images.length, maxLen)))
					.append(", ");
		if (location != null)
			builder.append("location=")
					.append(Arrays.toString(Arrays.copyOf(location, Math.min(location.length, maxLen))));
		builder.append("]");
		return builder.toString();
	}

}
