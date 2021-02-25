import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'interaction';

  countdownAliasMsg = '';
  endCountdown() {
    this.countdownAliasMsg = 'Ended!';
  }

  onRateChange(value) {
    console.log(value);
  }

}
