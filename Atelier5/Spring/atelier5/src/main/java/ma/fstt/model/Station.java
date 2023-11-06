package ma.fstt.model;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
public class Station {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = true)
    private Long id;

    @Column(nullable = true)
    private String nom;

    @Column(nullable = true)
    private String ville;

    @Column(nullable = true)
    private String adresse;
}
