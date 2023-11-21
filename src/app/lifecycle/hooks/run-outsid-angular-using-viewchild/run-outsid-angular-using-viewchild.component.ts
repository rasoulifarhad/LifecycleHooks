import { AfterViewChecked, AfterViewInit, Component, ElementRef, NgZone, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-run-outsid-angular-using-viewchild',
  templateUrl: './run-outsid-angular-using-viewchild.component.html',
  styleUrls: ['./run-outsid-angular-using-viewchild.component.css']
})
export class RunOutsidAngularUsingViewchildComponent implements AfterViewInit, AfterViewChecked{

  @ViewChild('btn') btnEl!: ElementRef;
  constructor(private readonly zone: NgZone,
            private readonly renderer: Renderer2) {}

  onClick() {
    console.log("onClick");
  }
  ngAfterViewChecked(): void {
    console.log('CD performed');
  }
  ngAfterViewInit(): void {
    this.setupClickListener();
  }


  setupClickListener() {
    this.zone.runOutsideAngular( () =>{
      this.setupClickListenerViaNativeAPI();
      this.setupClickListenerViaRenderer();
      this.setupClickListenerViaRsJs();
    })
  }
  setupClickListenerViaRsJs() {
    throw new Error('Method not implemented.');
  }
  setupClickListenerViaRenderer() {
    this.renderer.listen(this.btnEl.nativeElement, "click", () => {
      console.log("onClick");
   });
  }
  setupClickListenerViaNativeAPI() {
    this.btnEl.nativeElement.addEventListener("click", ()  => {
      console.log("onClick");
    });
  }

}
