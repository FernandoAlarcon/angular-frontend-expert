import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  username = '';
  email = '';
  password = '';

  constructor(private authService: AuthService, private router: Router) {}

  register(): void {
    const userData = { username: this.username, email: this.email, password: this.password };
    this.authService.register(userData).subscribe(
      (response: any) => {
        if (response.success) {
          this.router.navigate(['/login']);
        } else {
          alert('Registration failed');
        }
      },
      (error) => {
        alert('Error during registration');
      }
    );
  }
}
