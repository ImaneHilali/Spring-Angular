package ma.fstt.controller;

import ma.fstt.model.Carburant;
import ma.fstt.service.CarburantService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class CarburantController {

    @Autowired
    private CarburantService carburantService;

    @GetMapping("/carburants")
    public List<Carburant> getCarburants() {
        return carburantService.getCarburants();
    }

    @GetMapping("/carburants/{id}")
    public Carburant getCarburant(@PathVariable Long id) {
        return carburantService.getCarburant(id);
    }

    @PostMapping("/carburants")
    public Carburant createCarburant(@RequestBody Carburant carburant) {
        return carburantService.createCarburant(carburant);
    }

    @PutMapping("/carburants")
    public void updateCarburant(@RequestBody Carburant carburant) {
        carburantService.updateCarburant(carburant);
    }

    @DeleteMapping("/carburants/{id}")
    public void deleteCarburant(@PathVariable Long id) {
        carburantService.deleteCarburant(id);
    }

}
