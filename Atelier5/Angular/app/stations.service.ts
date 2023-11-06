import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'; 
import { Station } from './stations-list/station';

@Injectable({
  providedIn: 'root'
})
export class StationsService {

  constructor(private http: HttpClient) {}

  getStations(): Observable<Station[]> {
    return this.http.get<Station[]>('http://localhost:8080/stations');
  }

  getStation(id: number): Observable<Station> {
    return this.http.get<Station>('http://localhost:8080/stations/' + id);
  }

  createStation(station: Station): Observable<Station> {
    return this.http.post<Station>('http://localhost:8080/stations', station);
  }
 
  updateStation(station: Station): Observable<Station> {
    return this.http.put<Station>('http://localhost:8080/stations', station);
  }
  

  deleteStation(id: number): Observable<void> {
    return this.http.delete<void>('http://localhost:8080/stations/' + id);
  }
}
