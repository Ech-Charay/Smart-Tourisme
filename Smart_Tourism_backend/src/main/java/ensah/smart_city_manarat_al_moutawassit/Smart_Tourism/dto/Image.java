package ensah.smart_city_manarat_al_moutawassit.Smart_Tourism.dto;

/**
 * Image used to bind image data.
 * @author ECH-CHARAY Mohamed, MAACHI Bassma, EL JAIMI Walid
 *
 */
public class Image {

	private String src;
	
	private String altText;
	
	private String caption;

	/**
	 * constructor without params
	 */
	public Image() {}

	/**
	 * constructor with params
	 * @param src
	 * @param altText
	 * @param caption
	 */
	public Image(String src, String altText, String caption) {
		super();
		this.src = src;
		this.altText = altText;
		this.caption = caption;
	}

	/**
	 * @return the src
	 */
	public String getSrc() {
		return src;
	}

	/**
	 * @param src the src to set
	 */
	public void setSrc(String src) {
		this.src = src;
	}

	/**
	 * @return the altText
	 */
	public String getAltText() {
		return altText;
	}

	/**
	 * @param altText the altText to set
	 */
	public void setAltText(String altText) {
		this.altText = altText;
	}

	/**
	 * @return the caption
	 */
	public String getCaption() {
		return caption;
	}

	/**
	 * @param caption the caption to set
	 */
	public void setCaption(String caption) {
		this.caption = caption;
	}

	@Override
	public String toString() {
		StringBuilder builder = new StringBuilder();
		builder.append("Image [");
		if (src != null)
			builder.append("src=").append(src).append(", ");
		if (altText != null)
			builder.append("altText=").append(altText).append(", ");
		if (caption != null)
			builder.append("caption=").append(caption);
		builder.append("]");
		return builder.toString();
	}

}
