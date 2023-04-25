import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriserComponent } from './priser.component';

describe('PriserComponent', () => {
  let component: PriserComponent;
  let fixture: ComponentFixture<PriserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PriserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PriserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
