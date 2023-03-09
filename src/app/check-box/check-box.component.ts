import {Component, Input} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import { ClockData } from '../models/clockData.model';

@Component({
  selector: 'app-check-box',
  templateUrl: './check-box.component.html',
  styleUrls: ['./check-box.component.scss']
})
export class CheckBoxComponent {
  cities = this._formBuilder.group({
    Jerusalem: true,
    London: true,
    Manhattan: true,
    Tokyo: true
  });

  @Input() clocks: ClockData [];
  constructor(private _formBuilder: FormBuilder) {}

  toggleClock(clock: ClockData) {
    clock.checked = !clock?.checked;
  }
}
