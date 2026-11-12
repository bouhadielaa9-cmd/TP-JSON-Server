import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ParkSelected } from './park-selected';

describe('ParkSelected', () => {
  let component: ParkSelected;
  let fixture: ComponentFixture<ParkSelected>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParkSelected],
    }).compileComponents();

    fixture = TestBed.createComponent(ParkSelected);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
