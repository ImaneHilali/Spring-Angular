package ma.fstt.service;

import ma.fstt.model.Station;
import ma.fstt.repository.StationRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class StationService {
    private final StationRepository stationRepository;

    public StationService(StationRepository stationRepository) {
        this.stationRepository = stationRepository;
    }

    public List<Station> getStations() {
        return stationRepository.findAll();
    }

    public Station getStation(Long id) {
        return stationRepository.findById(id).orElse(null);
    }

    public Station createStation(Station station) {
        return stationRepository.save(station);
    }

    public void updateStation(Station station) {
        stationRepository.save(station);
    }

    public void deleteStation(Long id) {
        stationRepository.deleteById(id);
    }

    public Optional<Station> findStationById(Long stationId) {
        return stationRepository.findById(stationId);
    }
}
