import { Component, OnInit } from '@angular/core';
import { StationsService } from '../stations.service';
import { Station } from './station';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-stations-list',
  templateUrl: './stations-list.component.html',
  styleUrls: ['./stations-list.component.css']
})
export class StationsListComponent implements OnInit {
  stations: Station[] = [];
  selectedStation: Station | null = null;
  newStation: Station = {
    id: null,
    nom: '',
    ville: '',
    adresse: ''
  };
  isEditing: boolean = false;
  editStationData: Station = {
    id: null,
    nom: '',
    ville: '',
    adresse: ''
  };

  constructor(private stationsService: StationsService) {}

   
  ngOnInit(): void {
    this.fetchStations();
  }

  fetchStations() {
    this.stationsService.getStations().subscribe(
      data => this.stations = data);
  }

   
  addStation() {
    this.stationsService.createStation(this.newStation).subscribe(response => {
      console.log('Station added:', response);
      this.fetchStations();

      this.newStation = {
        id: null,
        nom: '',
        ville: '',
        adresse: ''
      };
    });
  }
   
  editStation(station: Station) {
    this.isEditing = true;
    this.editStationData = { ...station };
  }

  updateStation() {
    this.stationsService.updateStation(this.editStationData).subscribe(response => {
      console.log('Station updated:', response);
      this.isEditing = false;
      this.editStationData = {
        id: null,
        nom: '',
        ville: '',
        adresse: ''
      };
      this.fetchStations();
    });
  } 
  
  deleteStation(id: number) {
    this.stationsService.deleteStation(id)
      .subscribe(() => this.fetchStations());
  }
}