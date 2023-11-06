import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Carburant } from './carburant';
import { CarburantService } from '../carburant.service';

@Component({
  selector: 'app-carburant',
  templateUrl: './carburant.component.html',
  styleUrls: ['./carburant.component.css']
})
export class CarburantComponent implements OnInit {
  carburaunts: Carburant[] = [];
  selectedCarburant: Carburant | null = null;
  newCarburant: Carburant = {
    id: null,
    nom: '',
    description: ''
  };
  isEditing: boolean = false;
  editCarburantData : Carburant = {
    id: null,
    nom: '',
    description: ''
  };


  constructor(private carburantService: CarburantService) { }

  ngOnInit(): void {
    this.fetchCarburants();
  }

  fetchCarburants() {
    this.carburantService.getCarburants()
      .subscribe(data => this.carburaunts = data);
  }

  selectCarburant(carburant: Carburant) {
    this.selectedCarburant = { ...carburant };
  } 
 
  addCarburant() {
    this.carburantService.createCarburant(this.newCarburant).subscribe(response => {
      console.log('Station added:', response);
      this.fetchCarburants();

    });
  }

  editCarburant(carburant: Carburant) {
    this.isEditing = true;
    this.editCarburantData = { ...carburant };
  }

  updateCarburant() {
    this.carburantService.updateCarburant(this.editCarburantData ).subscribe(response => {
      console.log('Station updated:', response);
      this.isEditing = false;
      this.editCarburantData  = {
        id: null,
        nom: '',
        description: ''
      };
      this.fetchCarburants();
    });
  } 
 

  deleteCarburant(id: number) {
    this.carburantService.deleteCarburant(id)
      .subscribe(() => this.fetchCarburants());
  }
}
