package ma.fstt.controller;

import ma.fstt.model.Station;
import ma.fstt.service.StationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class StationController {

    @Autowired
    private StationService stationService;

    @GetMapping("/stations")
    public List<Station> getStations() {
        return stationService.getStations();
    }

    @GetMapping("/stations/{id}")
    public Station getStation(@PathVariable Long id) {
        return stationService.getStation(id);
    }

    @PostMapping("/stations")
    public Station createStation(@RequestBody Station station) {
        return stationService.createStation(station);
    }

    @PutMapping("/stations")
    public void updateStation(@RequestBody Station station) {
        stationService.updateStation(station);
    }

    @DeleteMapping("/stations/{id}")
    public void deleteStation(@PathVariable Long id) {
        stationService.deleteStation(id);
    }


}
