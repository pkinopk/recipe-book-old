import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FridgeDisplayComponent } from './fridge-display.component';

describe('FridgeDisplayComponent', () => {
  let component: FridgeDisplayComponent;
  let fixture: ComponentFixture<FridgeDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FridgeDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FridgeDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
