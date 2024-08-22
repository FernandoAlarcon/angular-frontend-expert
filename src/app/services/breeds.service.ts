import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BreedsService {
  private apiUrl = 'http://localhost:3000/api';  // Ajusta la URL según tu backend

  constructor(private http: HttpClient) { }

  getBreeds(): Observable<any> {
    return this.http.get(`${this.apiUrl}/breeds`);
  }

  getBreedById(breed_id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/breeds/${breed_id}`);
  }

  searchBreeds(query: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/breeds/search?query=${query}`);
  }

  getImagesByBreedId(breed_id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/imagesbybreedid?breed_id=${breed_id}`);
  }
}
