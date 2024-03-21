import { Component, Input, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-on-change',
  templateUrl: './on-change.component.html',
  styleUrls: ['./on-change.component.css']
})
export class OnChangeComponent {

  @Input() message: string;

  ngOnChanges(changes: SimpleChange) {
    console.log("ngOnChange called");
    //console.log(this.message);
    console.log(changes);


  }

}
