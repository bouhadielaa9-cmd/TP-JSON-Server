import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ParkItem } from './park-item';

describe('ParkItem', () => {
  let component: ParkItem;
  let fixture: ComponentFixture<ParkItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParkItem],
    }).compileComponents();

    fixture = TestBed.createComponent(ParkItem);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
