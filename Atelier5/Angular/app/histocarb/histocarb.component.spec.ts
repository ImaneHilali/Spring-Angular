import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoCarbComponent } from './histocarb.component';

describe('HistocarbComponent', () => {
  let component: HistoCarbComponent;
  let fixture: ComponentFixture<HistoCarbComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HistoCarbComponent]
    });
    fixture = TestBed.createComponent(HistoCarbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
