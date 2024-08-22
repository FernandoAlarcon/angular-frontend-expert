import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/api';  // Ajusta la URL según tu backend
  private loggedInStatus = false;

  constructor(private http: HttpClient, private router: Router) { }

  login(username: string, password: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/login`, { params: { username, password } });
  }

  register(userData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, userData);
  }

  logout(): void {
    this.loggedInStatus = false;
    // Borra token o cualquier otro dato de sesión
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    // Aquí podrías revisar si hay un token de sesión guardado
    return this.loggedInStatus;
  }

  setLoginStatus(status: boolean): void {
    this.loggedInStatus = status;
  }
}
