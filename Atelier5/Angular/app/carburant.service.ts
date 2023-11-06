import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'; 
import { Carburant } from './carburant/carburant';
 
@Injectable({
  providedIn: 'root'
})
export class CarburantService {

  constructor(private http: HttpClient) {}

  getCarburants(): Observable<Carburant[]> {
    return this.http.get<Carburant[]>('http://localhost:8080/carburants');
  }

  getCarburant(id: number): Observable<Carburant> {
    return this.http.get<Carburant>('http://localhost:8080/carburants/' + id);
  }

  createCarburant(carburant: Carburant): Observable<Carburant> {
    return this.http.post<Carburant>('http://localhost:8080/carburants', carburant);
  }
 
  updateCarburant(carburant: Carburant): Observable<Carburant> {
    return this.http.put<Carburant>(`http://localhost:8080/carburants`, carburant); //
  }
  

  deleteCarburant(id: number): Observable<void> {
    return this.http.delete<void>('http://localhost:8080/carburants/' + id);
  }
}
