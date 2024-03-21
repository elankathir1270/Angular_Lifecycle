import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lifecycle';
  inputValue: string;


  onBtnClicked(inputValue: HTMLInputElement) {
    this.inputValue = inputValue.value
  }
}
