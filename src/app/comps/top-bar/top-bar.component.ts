import { Component } from '@angular/core';
import {Router, RouterLink} from "@angular/router";
import {TopBarRouteModel} from "../../models/top-bar-route.model";

@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.css'
})
export class TopBarComponent {
  public readonly routes: TopBarRouteModel[] = [
    {name: 'Sandboxes', url: '/sandboxes'},
    {name: 'Tournaments', url: '/tournaments'},
  ]

  constructor(
    public router: Router,
  ) {
  }
}
