import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MelangeCreateComponent } from './melange-create.component';

describe('MelangeCreateComponent', () => {
  let component: MelangeCreateComponent;
  let fixture: ComponentFixture<MelangeCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MelangeCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MelangeCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
