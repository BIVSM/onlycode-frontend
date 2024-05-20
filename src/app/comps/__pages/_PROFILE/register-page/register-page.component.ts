import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {AuthService} from "../../../../services/api/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css', '../login-page/login-page.component.css']
})
export class RegisterPageComponent {
  public username: string = '';
  public email: string = '';
  public password1: string = '';
  public password2: string = '';

  constructor(
    private authService: AuthService,
    private router: Router,
  ) {
  }

  register() {
    if (this.password2 == this.password1)
      this.authService.register({username: this.username, email: this.email, password1: this.password1, password2: this.password2}).subscribe(
        resp => {
          this.router.navigate(['']).then();
          console.log(resp);
        }, error => {
          console.log(error);
        }
      );
    else {
      console.log('error');
    }
  }
}
