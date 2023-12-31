import { Component, Input, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import { Hero } from 'src/app/hero';

@Component({
  selector: 'app-on-changes',
  templateUrl: './on-changes.component.html',
  styleUrls: ['./on-changes.component.css']
})
export class OnChangesComponent implements OnChanges {

  @Input()
  hero!: Hero;

  @Input()
  power = '';

  changeLog: string[] = [];

  ngOnChanges(changes: SimpleChanges): void {

    for (const propName in changes) {
      const change = changes[propName];
      const cur = JSON.stringify(change.currentValue);
      const prev = JSON.stringify(change.previousValue);
      this.changeLog.push(`${propName}: currentValue = ${cur}, previousValue = ${prev}`);
    }
  }

  ifChanged(prop: SimpleChange,
            caallback: (value: any) => void) : void {
      if(prop !== undefined && prop.currentValue !== undefined) {
        caallback(prop.currentValue);
      }
  }

  reset() {
    this.changeLog = [];
  }
}
