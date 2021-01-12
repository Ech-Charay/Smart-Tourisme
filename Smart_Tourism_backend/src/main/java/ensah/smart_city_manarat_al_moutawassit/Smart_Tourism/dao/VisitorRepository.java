package ensah.smart_city_manarat_al_moutawassit.Smart_Tourism.dao;

import org.springframework.data.mongodb.repository.MongoRepository;

import ensah.smart_city_manarat_al_moutawassit.Smart_Tourism.entity.Visitor;

/**
 * Spring Data MongoDB based Visitor Repository
 * @author ECH-CHARAY Mohamed, MAACHI Bassma, EL JAIMI Walid
 *
 */
public interface VisitorRepository extends MongoRepository<Visitor, String	>{
	
	/**
	 * Method to fetch a Visitor from Mongodb Server by it's Email
	 * @param email
	 * @return Visitor
	 */
	Visitor findByEmail(String email);
}
