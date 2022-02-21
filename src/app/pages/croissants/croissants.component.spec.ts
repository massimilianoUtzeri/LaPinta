import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CroissantsComponent } from './croissants.component';

describe('CroissantsComponent', () => {
  let component: CroissantsComponent;
  let fixture: ComponentFixture<CroissantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CroissantsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CroissantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
