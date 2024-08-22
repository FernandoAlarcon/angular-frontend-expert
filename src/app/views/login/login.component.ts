import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email = '';
  password = '';

  constructor(private authService: AuthService, private router: Router) {}

  login(): void {

    this.authService.login(this.email, this.password).subscribe(
      (response) => {
 
        if (response) {
          // Guarda la información del usuario en localStorage
          localStorage.setItem('user', JSON.stringify(response));
          
          // Guarda el estado de login en el servicio de autenticación
          this.authService.setLoginStatus(true);
 

  
          // Navega a la página de información del usuario
          //this.router.navigate(['/user-info']);

          this.router.navigate(['/breeds-selector']);

        } else {
          alert('Login failed');
        }
      },
      (error) => {
        alert('Error during login');
      }
    );
  }
}
