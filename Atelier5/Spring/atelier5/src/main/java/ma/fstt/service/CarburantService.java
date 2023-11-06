package ma.fstt.service;

import ma.fstt.model.Carburant;
import ma.fstt.repository.CarburantRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CarburantService {
    private final CarburantRepository carburantRepository;

    public CarburantService(CarburantRepository carburantRepository) {
        this.carburantRepository = carburantRepository;
    }

    public List<Carburant> getCarburants() {
        return carburantRepository.findAll();
    }

    public Carburant getCarburant(Long id) {
        return carburantRepository.findById(id).orElse(null);
    }

    public Carburant createCarburant(Carburant carburant) {
        return carburantRepository.save(carburant);
    }

    public void updateCarburant(Carburant carburant) {
        carburantRepository.save(carburant);
    }

    public void deleteCarburant(Long id) {
        carburantRepository.deleteById(id);
    }

    public Optional<Carburant> findCarburantById(Long carburantId) {
        return carburantRepository.findById(carburantId);
    }
}
