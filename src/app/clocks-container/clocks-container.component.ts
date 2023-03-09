import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import data from '../../assets/json/data.json';
import { TimeZone } from '../models/timezone.model';
import { ClockData } from '../models/clockData.model';

@Component({
  selector: 'app-clocks-container',
  templateUrl: './clocks-container.component.html',
  styleUrls: ['./clocks-container.component.scss']
})
export class ClocksContainerComponent implements OnInit {
  clocks: ClockData [];
  timeZones: TimeZone [];
  constructor(private http: HttpClient) {}
  ngOnInit() {
    const now = new Date();
    const hour = now.getHours();
    const minute = now.getMinutes();
    const second = now.getSeconds();

    this.clocks = [{
      id: 1,
      hour: hour,
      minute: minute,
      second: second,
      city: 'Jerusalem',
      checked: true
    }];
    this.timeZones = data.timeZones;
    setOtherClocksData(this.clocks, this.timeZones);
  }
}



function setOtherClocksData(clocks: ClockData[], timeZones: TimeZone[]) {
  for (let i = 0; i < timeZones.length; i++) {
    if (timeZones[i].city !== 'Jerusalem') {
      const timeZoneGap = timeZones[i].gap;
      const currentTime = new Date();
      const timeInZone = new Date(currentTime.getTime() + (timeZoneGap * 60 * 60 * 1000));
      const hour = timeInZone.getUTCHours();
      const minute = timeInZone.getUTCMinutes();
      const second = timeInZone.getUTCSeconds();
      const city = timeZones[i].city;
      const checked = true;
      const newClock: ClockData = { id: i + 2, hour, minute, second, city, checked };
      clocks.push(newClock);
    }
  }
}
