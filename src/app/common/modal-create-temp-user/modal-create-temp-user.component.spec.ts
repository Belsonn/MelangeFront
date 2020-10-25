import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCreateTempUserComponent } from './modal-create-temp-user.component';

describe('ModalCreateTempUserComponent', () => {
  let component: ModalCreateTempUserComponent;
  let fixture: ComponentFixture<ModalCreateTempUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalCreateTempUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalCreateTempUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});