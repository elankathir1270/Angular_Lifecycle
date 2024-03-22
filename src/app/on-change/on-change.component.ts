import { Component, ElementRef, Input, SimpleChange, ViewChild } from '@angular/core';

@Component({
  selector: 'app-on-change',
  templateUrl: './on-change.component.html',
  styleUrls: ['./on-change.component.css']
})
export class OnChangeComponent {

  @Input() message: string;
  @ViewChild('temp') tempPara: ElementRef;

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

}
