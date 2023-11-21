import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RunOutsidAngularUsingEventManagerComponent } from './run-outsid-angular-using-event-manager.component';

describe('RunOutsidAngularUsingEventManagerComponent', () => {
  let component: RunOutsidAngularUsingEventManagerComponent;
  let fixture: ComponentFixture<RunOutsidAngularUsingEventManagerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RunOutsidAngularUsingEventManagerComponent]
    });
    fixture = TestBed.createComponent(RunOutsidAngularUsingEventManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
