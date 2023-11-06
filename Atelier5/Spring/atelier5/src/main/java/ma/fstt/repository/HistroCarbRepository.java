package ma.fstt.repository;

import ma.fstt.model.Carburant;
import ma.fstt.model.HistoCarb;
import ma.fstt.model.Station;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface HistroCarbRepository extends JpaRepository<HistoCarb,Long> {
    List<HistoCarb> findByStation(Optional<Station> station);

    List<HistoCarb> findByCarburant(Optional<Carburant> carburant);

}
