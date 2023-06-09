import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Crypto Tracker';
  isDarkEnabled = false;

  toggleMode() {
    this.isDarkEnabled = !this.isDarkEnabled;
  }
}
