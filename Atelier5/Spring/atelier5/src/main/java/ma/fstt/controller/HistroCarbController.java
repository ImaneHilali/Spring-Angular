package ma.fstt.controller;

import ma.fstt.model.Carburant;
import ma.fstt.model.HistoCarb;
import ma.fstt.model.Station;
import ma.fstt.service.CarburantService;
import ma.fstt.service.HistoCarbService;
import ma.fstt.service.StationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;
import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class HistroCarbController {

    @Autowired
    private final HistoCarbService histoCarbService;
    private final CarburantService carburantService;
    private final StationService stationService;

    public HistroCarbController(HistoCarbService histoCarbService, CarburantService carburantService, StationService stationService) {
        this.histoCarbService = histoCarbService;
        this.carburantService = carburantService;
        this.stationService = stationService;
    }

    @GetMapping("/histocarbs")
    public List<HistoCarb> getHistoCarbs() {
        return histoCarbService.getHistoCarbs();
    }


    @GetMapping("/byStation/{stationId}")
    public List<HistoCarb> getHistoryByStation(@PathVariable Long stationId) {
        Optional<Station> station = stationService.findStationById(stationId);
        if (station.isPresent()) {
            return histoCarbService.getHistoryByStation(station);
        } else {
             return Collections.emptyList();
        }
    }

    @GetMapping("/byCarburant/{carburantId}")
    public List<HistoCarb> getHistoryByCarburant(@PathVariable Long carburantId) {
        Optional<Carburant> carburant = carburantService.findCarburantById(carburantId);
        if (carburant.isPresent()) {
            return histoCarbService.getHistoryByCarburant(carburant);
        } else {
             return Collections.emptyList();
        }
    }

    @PostMapping("/histocarbs")
    public HistoCarb createHistoCarb(@RequestBody HistoCarb histoCarb) {
        return histoCarbService.createHistoCarb(histoCarb);
    }

    @PutMapping("/histocarbs")
    public void updateHistoCarb(@RequestBody HistoCarb histoCarb) {
        histoCarbService.updateHistoCarb(histoCarb);
    }



}
