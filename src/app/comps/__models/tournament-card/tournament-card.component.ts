import {Component, Input} from '@angular/core';
import {TournamentModel} from "../../../models/tournament.model";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-tournament-card',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './tournament-card.component.html',
  styleUrl: './tournament-card.component.css'
})
export class TournamentCardComponent {
  @Input() tournament!: TournamentModel;
}
