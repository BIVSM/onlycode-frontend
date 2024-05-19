import { Component } from '@angular/core';
import {TournamentModel} from "../../../models/tournament.model";
import {TopBarRouteModel} from "../../../models/top-bar-route.model";
import {RouterLink, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'app-tournament-right-bar',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './tournament-right-bar.component.html',
  styleUrl: './tournament-right-bar.component.css'
})
export class TournamentRightBarComponent {
  public tournament: TournamentModel = {id: 0,name: 'Chess Game', finish_registration_date: '3 Dec 2024', start_date: '5 July 2024', image: 'assets/img.png'};
  public readonly routes: TopBarRouteModel[] = [
    {name: 'about', url: `about`, image: 'about.svg' },
    {name: 'upload', url: `upload`, image: 'upload.svg' },
  ]

  getUrl() {
    const url = window.location.href.split('/');
    return url[url.length-1];
  }
}
