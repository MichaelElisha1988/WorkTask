import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

export interface Account {
  token: string;
  personalDetails: {
    Team: string;
    avatar: string;
    joinedAt: string;
    fullName: string;
  };
}

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private loggedInSource = new BehaviorSubject<boolean>(false);
  currentLoggedIn = this.loggedInSource.asObservable();

  logedInChange(state: boolean) {
    this.loggedInSource.next(state);
  }

  private curAccountSource = new BehaviorSubject<any>(null);
  currentcurAccount = this.curAccountSource.asObservable();

  curAccountChange(account: any) {
    this.curAccountSource.next(account);
  }

  private infoDataSource = new BehaviorSubject<any>(null);
  currentinfoData = this.infoDataSource.asObservable();

  infoDataChange(infoData: any) {
    this.infoDataSource.next(infoData);
  }

  private baseUrl = 'https://private-052d6-testapi4528.apiary-mock.com/';

  constructor(private http: HttpClient) {}

  logIn(email: string, password: string, token: boolean = false) {
    if (!this.ifValidLogin(email, password, token))
      alert('Invalid Account Please Try Again');
    else {
      this.postAccount();
      this.getInfo();
    }
  }

  postAccount() {
    const formData: FormData = new FormData();
    this.http
      .post(this.baseUrl + 'authenticate', formData)
      .subscribe((result) => {
        console.log(result);

        this.curAccountChange(result);
        console.log(this.curAccountSource.getValue());
      });
  }

  getInfo() {
    // const httpOptions: Object = {
    //   header: `Berear {{${this.curAccountSource.getValue()[0].token}}}`,
    // };
    this.http.get(this.baseUrl + 'info').subscribe((result) => {
      console.log(result);
      this.infoDataChange(result);
      this.logedInChange(true);
    });
  }

  ifValidLogin(email: string, password: string, token: boolean) {
    return (email && password) || token;
  }
}
