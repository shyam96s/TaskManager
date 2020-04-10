import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupUserRegComponent } from './signup-user-reg.component';

describe('SignupUserRegComponent', () => {
  let component: SignupUserRegComponent;
  let fixture: ComponentFixture<SignupUserRegComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupUserRegComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupUserRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
