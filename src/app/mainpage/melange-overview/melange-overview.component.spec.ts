import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MelangeOverviewComponent } from './melange-overview.component';

describe('MelangeOverviewComponent', () => {
  let component: MelangeOverviewComponent;
  let fixture: ComponentFixture<MelangeOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MelangeOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MelangeOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
