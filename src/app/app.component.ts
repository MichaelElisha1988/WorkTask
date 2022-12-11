import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'app-task';
  loggedIn?: boolean;
  loading?: boolean = false;

  constructor(private DataService: DataService) {
    this.DataService.currentLoggedIn.subscribe(
      (loggedIn) => (this.loggedIn = loggedIn)
    );
  }

  ngOnInit(): void {
    this.loggedIn = localStorage.getItem('token') ? true : false;

    if (this.loggedIn) {
      this.DataService.logIn('', '', this.loggedIn);
    }
  }
}
