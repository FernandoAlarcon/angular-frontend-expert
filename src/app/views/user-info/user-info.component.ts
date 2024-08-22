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
    // Obtiene la información del usuario desde el servicio de autenticación
    this.userInfo = this.authService.getUser();
  }
}
