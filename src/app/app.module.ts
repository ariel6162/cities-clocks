import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule  } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ClockComponent } from './clock/clock.component';
import { ClocksContainerComponent } from './clocks-container/clocks-container.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CheckBoxComponent } from './check-box/check-box.component';

@NgModule({
  declarations: [
    AppComponent,
    ClockComponent,
    ClocksContainerComponent,
    CheckBoxComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
