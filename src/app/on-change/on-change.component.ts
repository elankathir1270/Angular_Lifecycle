import { Component, ContentChild, ElementRef, Input, SimpleChange, ViewChild } from '@angular/core';

@Component({
  selector: 'app-on-change',
  templateUrl: './on-change.component.html',
  styleUrls: ['./on-change.component.css']
})
export class OnChangeComponent {

  @Input() message: string;
  @ViewChild('temp') tempPara: ElementRef;
  @ContentChild('contRef') contPara: ElementRef

  constructor() {
    console.log("constructor is called");

  }

  ngOnChanges(changes: SimpleChange) {
    console.log("ngOnChange called");
    //console.log(this.message);
    console.log(changes);

  }

  ngOnInit() {
    console.log("ngOnInit called");
    //console.log(this.tempPara.nativeElement.innerHTML);

  }

  ngDoCheck() {
    console.log("ngDoCheck called");
    console.log("from DoCheck " + this.contPara);
  }

  ngAfterContentInit() {
    console.log("ngAfterContentInit called");
    console.log("from AfterContInit " + this.contPara.nativeElement);
  }

}
