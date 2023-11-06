package ma.fstt.service;

import ma.fstt.model.Carburant;
import ma.fstt.model.HistoCarb;
import ma.fstt.model.Station;
import ma.fstt.repository.HistroCarbRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class HistoCarbService {
    private final HistroCarbRepository histoCarbRepository;

    public HistoCarbService(HistroCarbRepository histoCarbRepository) {
        this.histoCarbRepository = histoCarbRepository;
    }

    public List<HistoCarb> getHistoCarbs() {
        return histoCarbRepository.findAll();
    }

    public HistoCarb createHistoCarb(HistoCarb histoCarb) {
        return histoCarbRepository.save(histoCarb);
    }

    public void updateHistoCarb(HistoCarb histoCarb) {
        histoCarbRepository.save(histoCarb);
    }

    public List<HistoCarb> getHistoryByStation(Optional<Station> station) {
        return histoCarbRepository.findByStation(station);
    }

    public List<HistoCarb> getHistoryByCarburant(Optional<Carburant> carburant) {
        return histoCarbRepository.findByCarburant(carburant);
    }

}
