import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Salon } from './salon';

@Injectable({
  providedIn: 'root'
})
export class SalonService {

  constructor(private http: HttpClient) { }

  findSalons(): Observable<Salon[]> {
    return this.http.get<Salon[]>(`${environment.backUrl}/Salons`)
  }

  deleteSalons(Salon: Salon): Observable<void> {
    return this.http.delete<void>(`${environment.backUrl}/Salons/${Salon.name}`)
  }
}
