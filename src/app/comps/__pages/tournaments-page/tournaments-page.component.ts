import { Component } from '@angular/core';
import {TournamentModel} from "../../../models/tournament.model";
import {TournamentCardComponent} from "../../__models/tournament-card/tournament-card.component";

@Component({
  selector: 'app-tournaments-page',
  standalone: true,
  imports: [
    TournamentCardComponent
  ],
  templateUrl: './tournaments-page.component.html',
  styleUrl: './tournaments-page.component.css'
})
export class TournamentsPageComponent {
  public upcoming_tournaments: TournamentModel[] = [
    {id: 0,name: 'Chess Game', finish_registration_date: '3 Dec 2024', start_date: '5 July 2024', image: 'assets/img.png'},
    {id: 1,name: 'Chess Game', finish_registration_date: '3 Dec 2024', start_date: '5 July 2024', image: 'assets/img.png'},
    {id: 2,name: 'Chess Game', finish_registration_date: '3 Dec 2024', start_date: '5 July 2024', image: 'assets/img.png'},
    {id: 3,name: 'Chess Game', finish_registration_date: '3 Dec 2024', start_date: '5 July 2024', image: 'assets/img.png'},
    {id: 4,name: 'Chess Game', finish_registration_date: '3 Dec 2024', start_date: '5 July 2024', image: 'assets/img.png'},
  ]
}
