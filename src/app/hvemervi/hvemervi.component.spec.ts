import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HvemerviComponent } from './hvemervi.component';

describe('HvemerviComponent', () => {
  let component: HvemerviComponent;
  let fixture: ComponentFixture<HvemerviComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HvemerviComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HvemerviComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
