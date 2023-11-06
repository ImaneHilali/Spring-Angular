package ma.fstt.repository;

import ma.fstt.model.Carburant;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CarburantRepository extends JpaRepository<Carburant,Long> {
}
