import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  @Input()
  text: string = '';

  // setValue(event :SimpleChange) {
  //   console.log('event')
  //   return this.text.currentValue = event.currentValue;
  //   ;
  // }
}
