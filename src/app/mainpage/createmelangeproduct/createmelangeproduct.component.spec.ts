import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMelangeProductComponent } from './createmelangeproduct.component';

describe('CreateMelangeProductComponent', () => {
  let component: CreateMelangeProductComponent;
  let fixture: ComponentFixture<CreateMelangeProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateMelangeProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateMelangeProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
