import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClocksContainerComponent } from './clocks-container.component';

describe('ClocksContainerComponent', () => {
  let component: ClocksContainerComponent;
  let fixture: ComponentFixture<ClocksContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClocksContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClocksContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
