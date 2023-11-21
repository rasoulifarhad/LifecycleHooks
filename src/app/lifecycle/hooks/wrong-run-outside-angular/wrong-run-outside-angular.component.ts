import { AfterViewChecked, Component, NgZone } from '@angular/core';

@Component({
  selector: 'app-wrong-run-outside-angular',
  templateUrl: './wrong-run-outside-angular.component.html',
  styleUrls: ['./wrong-run-outside-angular.component.css']
})
export class WrongRunOutsideAngularComponent implements AfterViewChecked {


  constructor(private readonly zone: NgZone) {

  }

  onClick() {
    this.zone.runOutsideAngular( () => {
      console.log("onClick");
    });
  }

  ngAfterViewChecked(): void {
    console.log("CD performed");
  }


}
