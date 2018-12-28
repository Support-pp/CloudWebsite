import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterOkComponent } from './register-ok.component';

describe('RegisterOkComponent', () => {
  let component: RegisterOkComponent;
  let fixture: ComponentFixture<RegisterOkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterOkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterOkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
