package ensah.smart_city_manarat_al_moutawassit.Smart_Tourism.entity.guide;

import org.springframework.data.mongodb.core.mapping.Document;

import ensah.smart_city_manarat_al_moutawassit.Smart_Tourism.dto.Image;

/**
 * Beach Entity
 * @author ECH-CHARAY Mohamed, MAACHI Bassma, EL JAIMI Walid
 *
 */
@Document
public class Beach extends Place {

	/**
	 * constructor without params
	 */
	public Beach() {}

	/**
	 * constructor with params
	 * @param id
	 * @param name
	 * @param images
	 * @param location
	 */
	public Beach(String id, String name, Image[] images, double[] location) {
		super(id, name, images, location);
	}

	@Override
	public String toString() {
		StringBuilder builder = new StringBuilder();
		builder.append("Plage [" + super.toString() + "]");
		return builder.toString();
	}
	
}
