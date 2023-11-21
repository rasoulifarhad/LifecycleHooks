import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WrongRunOutsideAngularComponent } from './wrong-run-outside-angular.component';

describe('WrongRunOutsideAngularComponent', () => {
  let component: WrongRunOutsideAngularComponent;
  let fixture: ComponentFixture<WrongRunOutsideAngularComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WrongRunOutsideAngularComponent]
    });
    fixture = TestBed.createComponent(WrongRunOutsideAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
