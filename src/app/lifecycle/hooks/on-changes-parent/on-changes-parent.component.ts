import { Component, ViewChild } from '@angular/core';
import { Hero } from 'src/app/hero';
import { OnChangesComponent } from '../on-changes/on-changes.component';

@Component({
  selector: 'app-on-changes-parent',
  templateUrl: './on-changes-parent.component.html',
  styleUrls: ['./on-changes-parent.component.css']
})
export class OnChangesParentComponent {

  hero!: Hero;
  power = '';
  title = 'OnChanges';
  @ViewChild(OnChangesComponent) childView!: OnChangesComponent;

  constructor() {
    this.reset();
  }


  reset() {
    this.hero = new Hero('Windstorm');
    this.power = 'sing';
    if(this.childView) {
      this.childView.reset();
    }
  }
}
