import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-log-in-page',
  templateUrl: './log-in-page.component.html',
  styleUrls: ['./log-in-page.component.scss'],
})
export class LogInPageComponent implements OnInit {
  email: any = '';
  password: any = '';

  validPassword: boolean = false;
  validEmail: boolean = false;

  uppperCaseletter: boolean = false;
  numberletter: boolean = false;

  constructor(private DataService: DataService) {}

  ngOnInit(): void {}

  onLogIn() {
    if (this.validPassword && this.validEmail)
      this.DataService.logIn(this.email, this.password);
    else alert('Email or Password not valid');
  }
  onKeyUpPass(e: any) {
    if (e.key === e.key.toUpperCase() && isNaN(e.key)) {
      this.uppperCaseletter = true;
      console.log('upTrue');
    }
    if (!isNaN(e.key)) {
      this.numberletter = true;
      console.log('nuTrue');
    }
    if (
      this.password.length >= 8 &&
      this.uppperCaseletter &&
      this.numberletter
    ) {
      this.validPassword = true;
    } else {
      this.validPassword = false;
    }
  }

  onKeyUpEmail(e: any) {
    if (this.email.includes('@')) {
      this.validEmail = true;
    }
  }
}
