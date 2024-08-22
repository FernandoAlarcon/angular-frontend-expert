import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username = '';
  password = '';

  constructor(private authService: AuthService, private router: Router) {}

  login(): void {
    this.authService.login(this.username, this.password).subscribe(
      (response) => {
        if (response.success) {
          this.authService.setLoginStatus(true);
          this.router.navigate(['/user-info']);
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
