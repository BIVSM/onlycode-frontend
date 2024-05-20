import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {AuthService} from "../../../../services/api/auth.service";

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {
  public username: string = '';
  public password: string = '';

  constructor(
    private authService: AuthService,
  ) {
  }

  login() {
    this.authService.login({username: this.username, password: this.password})
  }
}
