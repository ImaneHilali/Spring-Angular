import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HistoCarb } from './histocarb/histrocarb';
 
@Injectable({
  providedIn: 'root'
})
export class HistocarbService {
  private apiUrl = 'http://localhost:8080'; // Assuming your Spring Boot API is running locally

  constructor(private http: HttpClient) { }

  getHistoCarbs(): Observable<HistoCarb[]> {
    return this.http.get<HistoCarb[]>(`${this.apiUrl}/histocarbs`);
  }

  getHistoryByStation(stationId: number): Observable<HistoCarb[]> {
    return this.http.get<HistoCarb[]>(`${this.apiUrl}/byStation/${stationId}`);
  }

  getHistoryByCarburant(carburantId: number): Observable<HistoCarb[]> {
    return this.http.get<HistoCarb[]>(`${this.apiUrl}/byCarburant/${carburantId}`);
  }

  createHistoCarb(histoCarb: HistoCarb): Observable<HistoCarb> {
    return this.http.post<HistoCarb>(`${this.apiUrl}/histocarbs`, histoCarb);
  }

  updateHistoCarb(histoCarb: HistoCarb): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/histocarbs`, histoCarb);
  }
}
