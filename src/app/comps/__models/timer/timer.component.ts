import {AfterViewInit, Component, Input, ViewChild} from '@angular/core';

@Component({
  selector: 'app-timer',
  standalone: true,
  imports: [],
  templateUrl: './timer.component.html',
  styleUrl: './timer.component.css'
})
export class TimerComponent implements AfterViewInit {
  @Input() finish!: Date;
  @ViewChild('days') days: any;
  @ViewChild('hours') hours: any;
  @ViewChild('minutes') minutes: any;
  @ViewChild('seconds') seconds: any;

  ngAfterViewInit() {
    this.setTime();
  }

  async setTime() {
    const now = (new Date());
    const time = this.finish.getTime() - now.getTime();
    let days = this.finish.getDay() - now.getDay();
    let hours = Math.floor(time / (60 * 60 * 1000));
    let minutes = Math.floor(time / (60 * 1000) % 60);
    let seconds = Math.floor(time / (1000) % 60);

    let sdays = String(days);
    let shours = String(hours);
    let sminutes = String(minutes);
    let sseconds = String(seconds);

    if (sdays.length == 1) sdays = "0"+sdays;
    if (shours.length == 1) shours = "0"+shours;
    if (sminutes.length == 1) sminutes = "0"+sminutes;
    if (sseconds.length == 1) sseconds = "0"+sseconds;

    this.days.nativeElement.innerText = sdays;
    this.hours.nativeElement.innerText = shours;
    this.minutes.nativeElement.innerText = sminutes;
    this.seconds.nativeElement.innerText = sseconds;

    setTimeout(()=>{this.setTime();}, 1000);
  }
}
