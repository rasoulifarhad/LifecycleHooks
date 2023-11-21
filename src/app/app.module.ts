import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OnChangesComponent } from './lifecycle/hooks/on-changes/on-changes.component';
import { OnChangesParentComponent } from './lifecycle/hooks/on-changes-parent/on-changes-parent.component';
import { OnAfterViewCheckedComponent } from './lifecycle/hooks/on-after-view-checked/on-after-view-checked.component';
import { WrongRunOutsideAngularComponent } from './lifecycle/hooks/wrong-run-outside-angular/wrong-run-outside-angular.component';
import { RunOutsidAngularUsingViewchildComponent } from './lifecycle/hooks/run-outsid-angular-using-viewchild/run-outsid-angular-using-viewchild.component';
import { RunOutsidAngularUsingDirectiveComponent } from './lifecycle/hooks/run-outsid-angular-using-directive/run-outsid-angular-using-directive.component';
import { RunOutsidAngularUsingEventManagerComponent } from './lifecycle/hooks/run-outsid-angular-using-event-manager/run-outsid-angular-using-event-manager.component';
import { ButtonDirective } from './dsirectives/button.directive';

@NgModule({
  declarations: [
    AppComponent,
    OnChangesComponent,
    OnChangesParentComponent,
    OnAfterViewCheckedComponent,
    WrongRunOutsideAngularComponent,
    RunOutsidAngularUsingViewchildComponent,
    RunOutsidAngularUsingDirectiveComponent,
    RunOutsidAngularUsingEventManagerComponent,
    ButtonDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
