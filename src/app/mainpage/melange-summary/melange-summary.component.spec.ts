import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MelangeSummaryComponent } from './melange-summary.component';

describe('MelangeSummaryComponent', () => {
  let component: MelangeSummaryComponent;
  let fixture: ComponentFixture<MelangeSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MelangeSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MelangeSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
