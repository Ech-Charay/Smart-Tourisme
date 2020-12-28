package ensah.smart_city_manarat_al_moutawassit.Smart_Tourism.dao;

import org.springframework.data.mongodb.repository.MongoRepository;

import ensah.smart_city_manarat_al_moutawassit.Smart_Tourism.entity.Event;

/**
 * Spring Data MongoDB based Event Repository
 * @author ECH-CHARAY Mohamed, MAACHI Bassma, EL JAIMI Walid
 *
 */
public interface EventRepository extends MongoRepository<Event, String>{

}
