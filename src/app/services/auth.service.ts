import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, tap, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:3000/api';  // Ajusta la URL según tu backend
  private loggedIn = false;

  private isLoggedInSubject = new BehaviorSubject<boolean>(this.checkLoginStatus());
  isLoggedIn$ = this.isLoggedInSubject.asObservable();

  constructor(private http: HttpClient, private router: Router) { }

  // Simula el estado de autenticación
  private checkLoginStatus(): boolean {
    return !!localStorage.getItem('user');
  }

  login(email: string, password: string): Observable<any> {
    const body = { email, password };
    return this.http.post<any>('http://localhost:3000/api/login', body);
  }

  register(userData: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/register`, userData).pipe(
      tap((response:any) => {
        if (response) {
          // Guarda la información del usuario en localStorage
          localStorage.setItem('user', JSON.stringify(response));
          this.loggedIn = true;
        }
      })
    );
  }

  logout(): void {
    this.loggedIn = false;
    // Borra token o cualquier otro dato de sesión
    this.router.navigate(['/login']);
  }

  getUser(): any {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  }

  isLoggedIn(): boolean {
    // Aquí podrías revisar si hay un token de sesión guardado
    return this.loggedIn;
  }

  setLoginStatus(status: boolean): void {
    this.loggedIn = status;
  }
}
