import {Component, Input} from '@angular/core';
import {TournamentRightBarComponent} from "../../../__models/tournament-right-bar/tournament-right-bar.component";
import {RouterOutlet} from "@angular/router";
import {TopBarRouteModel} from "../../../../models/top-bar-route.model";
import {TournamentModel} from "../../../../models/tournament.model";

@Component({
  selector: 'app-tournament-main-page',
  standalone: true,
  imports: [
    TournamentRightBarComponent,
    RouterOutlet
  ],
  templateUrl: './tournament-main-page.component.html',
  styleUrl: './tournament-main-page.component.css'
})
export class TournamentMainPageComponent {
}
