import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RunOutsidAngularUsingDirectiveComponent } from './run-outsid-angular-using-directive.component';

describe('RunOutsidAngularUsingDirectiveComponent', () => {
  let component: RunOutsidAngularUsingDirectiveComponent;
  let fixture: ComponentFixture<RunOutsidAngularUsingDirectiveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RunOutsidAngularUsingDirectiveComponent]
    });
    fixture = TestBed.createComponent(RunOutsidAngularUsingDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
