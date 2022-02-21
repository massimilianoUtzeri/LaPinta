import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BocadillosComponent } from './bocadillos.component';

describe('BocadillosComponent', () => {
  let component: BocadillosComponent;
  let fixture: ComponentFixture<BocadillosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BocadillosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BocadillosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
