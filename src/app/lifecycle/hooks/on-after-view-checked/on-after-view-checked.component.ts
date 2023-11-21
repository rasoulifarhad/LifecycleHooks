import { AfterViewChecked, Component } from '@angular/core';

@Component({
  selector: 'app-on-after-view-checked',
  templateUrl: './on-after-view-checked.component.html',
  styleUrls: ['./on-after-view-checked.component.css']
})
export class OnAfterViewCheckedComponent implements AfterViewChecked{

  onClick() {
    console.log('onClick');
  }


  ngAfterViewChecked(): void {
    console.log('CD performed');

  }

}
