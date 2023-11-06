import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HistoCarb } from './histrocarb';
import { HistocarbService } from '../histocarb.service'; 
@Component({
  selector: 'app-histocarb',
  templateUrl: './histocarb.component.html',
  styleUrls: ['./histocarb.component.css']
})
export class HistoCarbComponent implements OnInit {
  histoCarbs: HistoCarb[] = [];
  selectedHistoCarb: HistoCarb | null = null;
  newHistoCarb: HistoCarb = {
    id: null,
    date: new Date(),
    prix: 0.0
  };
  isEditing: boolean = false;
  editHistoCarbData: HistoCarb = {
    id: null,
    date: new Date(),
    prix: 0.0
  };

  constructor(private histoCarbService: HistocarbService) { }

  ngOnInit(): void {
    this.fetchHistoCarbs();
  }

  fetchHistoCarbs() {
    this.histoCarbService.getHistoCarbs()
      .subscribe(data => this.histoCarbs = data);
  }
 
  addHistoCarb() {
    this.histoCarbService.createHistoCarb(this.newHistoCarb).subscribe(response => {
      console.log('histrocarb added:', response);
      this.fetchHistoCarbs();
 
    });
  }

  editHistoCarb(histocarb: HistoCarb) {
    this.isEditing = true;
    this.editHistoCarbData = { ...histocarb };
  }

  updateHistoCarb() {
    this.histoCarbService.updateHistoCarb(this.editHistoCarbData).subscribe(response => {
      console.log('Station updated:', response);
      this.isEditing = false;
      this.editHistoCarbData = {
        id: null,
        date:new Date(),
        prix:0.0
      };
      this.fetchHistoCarbs();
    });
  } 
  
}
