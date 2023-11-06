package ma.fstt.model;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
public class Carburant {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false)
    private Long id;

    @Column(nullable = true)
    private String nom;

    @Column(nullable = true)
    private String description;
}
