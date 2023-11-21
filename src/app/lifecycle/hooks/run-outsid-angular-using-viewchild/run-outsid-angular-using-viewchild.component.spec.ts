import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RunOutsidAngularUsingViewchildComponent } from './run-outsid-angular-using-viewchild.component';

describe('RunOutsidAngularUsingViewchildComponent', () => {
  let component: RunOutsidAngularUsingViewchildComponent;
  let fixture: ComponentFixture<RunOutsidAngularUsingViewchildComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RunOutsidAngularUsingViewchildComponent]
    });
    fixture = TestBed.createComponent(RunOutsidAngularUsingViewchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
