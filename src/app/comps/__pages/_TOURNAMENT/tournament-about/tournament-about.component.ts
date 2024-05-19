import { Component } from '@angular/core';
import {TimerComponent} from "../../../__models/timer/timer.component";
import {FriendProfileComponent} from "../../../__models/friend-profile/friend-profile.component";

@Component({
  selector: 'app-tournament-about',
  standalone: true,
  imports: [
    TimerComponent,
    FriendProfileComponent
  ],
  templateUrl: './tournament-about.component.html',
  styleUrl: './tournament-about.component.css'
})
export class TournamentAboutComponent {
  getDate() {
    return new Date(2024, 4, 20, 22, 30, 0);
  }
}
