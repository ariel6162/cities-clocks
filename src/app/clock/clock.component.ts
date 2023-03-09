import { Component, AfterViewInit,Input } from '@angular/core';
import { ClockData } from '../models/clockData.model';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss']
})
export class ClockComponent implements AfterViewInit{

  hourHandStyle: { transform: string; };
  minuteHandStyle: { transform: string; };
  secondHandStyle: { transform: string; };
  isRunning = true;
  timerId: any;

  @Input() clock: ClockData = { id: 1, hour: 6, minute: 14, second: 8, city: 'Jerusalem', checked: true };

  ngAfterViewInit() {
    this.timerId = this.getTime();
  }

  animateAnalogClock(clock: any) {
    this.hourHandStyle = { transform: `translate3d(-50%, 0, 0) rotate(${(clock.hour * 30) + (clock.minute * 0.5) + (clock.second * (0.5 / 60))}deg)` };

    this.minuteHandStyle = { transform: `translate3d(-50%, 0, 0) rotate(${(clock.minute * 6) + (clock.second * 0.1)}deg)` };

    this.secondHandStyle = { transform: `translate3d(-50%, 0, 0) rotate(${clock.second * 6}deg)` };
  }

  getTime() {
    return setInterval(() => {this.animateAnalogClock(this.clock);}, 1000);
  }

  format(num: number) {
    return (num + '').length === 1 ? '0' + num : num + '';
  }
}
