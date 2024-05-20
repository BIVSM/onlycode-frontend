import { Component } from '@angular/core';
import {Router, RouterLink} from "@angular/router";
import {TopBarRouteModel} from "../../models/top-bar-route.model";
import {AuthService} from "../../services/api/auth.service";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [
    RouterLink,
    NgIf
  ],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.css'
})
export class TopBarComponent {
  public readonly routes: TopBarRouteModel[] = [
    {name: 'Sandboxes', url: '/sandboxes'},
    {name: 'Tournaments', url: '/tournaments'},
  ];
  public user: any;

  constructor(
    public router: Router,
    private authService: AuthService,
  ) {
    this.getProfile();
  }

  getProfile() {
    this.authService.profile().subscribe(
      resp => {
        this.user = resp;
      }, error => { this.user = undefined; }
    )
  }
}
