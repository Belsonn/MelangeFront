import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MelangeViewComponent } from './melange-view.component';

describe('MelangeViewComponent', () => {
  let component: MelangeViewComponent;
  let fixture: ComponentFixture<MelangeViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MelangeViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MelangeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
