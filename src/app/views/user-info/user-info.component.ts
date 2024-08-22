import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
  userInfo: any = {};

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    // Aquí deberías obtener la información del usuario desde el backend
    // Supongamos que ya tienes un método para obtener el usuario
    this.userInfo = { username: 'example', email: 'example@example.com' }; // Sustituir con datos reales
  }
}
