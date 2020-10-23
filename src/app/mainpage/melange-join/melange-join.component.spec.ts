import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MelangeJoinComponent } from './melange-join.component';

describe('MelangeJoinComponent', () => {
  let component: MelangeJoinComponent;
  let fixture: ComponentFixture<MelangeJoinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MelangeJoinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MelangeJoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
