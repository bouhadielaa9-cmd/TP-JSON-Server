
import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Park } from '../models/park';

const URL = 'http://localhost:3001/parks';

@Injectable({
  providedIn: 'root'
})
export class ParkService {

  private readonly http = inject(HttpClient);

  private readonly _parks = signal<Park[]>([]);
  parks = this._parks.asReadonly();

  getParks() {
  return this.http.get<Park[]>(URL).pipe(
    tap(data => this._parks.set(data))
  );
}

  getParkById(id: string): Observable<Park> {
    return this.http.get<Park>(`${URL}/${id}`);
  }

  deletePark(id: string): Observable<Park> {
    return this.http.delete<Park>(`${URL}/${id}`).pipe(
      tap(() => {
        this._parks.update(parks =>
          parks.filter(p => p.id !== id)
        );
      })
    );
  }

  updatePark(id: string, park: Park): Observable<Park> {
    return this.http.put<Park>(`${URL}/${id}`, park).pipe(
      tap(updatedPark => {
        this._parks.update(parks =>
          parks.map(p => p.id === id ? updatedPark : p)
        );
      })
    );
  }
}
