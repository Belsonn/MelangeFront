import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDeleteMelangeComponent } from './modal-delete-melange.component';

describe('ModalDeleteMelangeComponent', () => {
  let component: ModalDeleteMelangeComponent;
  let fixture: ComponentFixture<ModalDeleteMelangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalDeleteMelangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalDeleteMelangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
