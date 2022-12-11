import { Component, HostListener, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-logged-in-page',
  templateUrl: './logged-in-page.component.html',
  styleUrls: ['./logged-in-page.component.scss'],
})
export class LoggedInPageComponent implements OnInit {
  infoData?: any;
  curAccount?: any;
  sorted?: boolean = false;
  notSoredInfoData: any = [];
  sortedName: string = '';
  onDeadlineCompleteCount: number = 0;
  sumScore: number = 0;
  avgScore: number = 0;
  onDeadlinepresent: string = '0';

  constructor(private DataService: DataService) {
    this.DataService.currentcurAccount.subscribe(
      (curAccount) => (this.curAccount = curAccount)
    );
    this.DataService.currentinfoData.subscribe(
      (infoData) => (this.infoData = infoData)
    );
  }

  ngOnInit(): void {
    localStorage.setItem('token', this.curAccount[0].token);
  }

  ngDoCheck() {
    this.onDeadlineCompleteCount = 0;
    this.sumScore = 0;
    this.avgScore = 0;
    this.onDeadlinepresent = '0';
    for (let i = 0; i < this.infoData.length; i++) {
      this.infoData[i].madeDadeline
        ? this.onDeadlineCompleteCount++
        : this.onDeadlineCompleteCount;
      this.sumScore += this.infoData[i].score;
    }
    this.avgScore = this.sumScore / this.infoData.length;
    this.onDeadlinepresent = (
      (this.onDeadlineCompleteCount / this.infoData.length) *
      100
    ).toFixed(0);
    console.log(this.onDeadlineCompleteCount);
    console.log(this.sumScore);
  }

  onLogOut() {
    localStorage.removeItem('token');
    this.DataService.logedInChange(false);
  }

  sortList(e: any) {
    this.sortedName = e.srcElement.innerHTML;

    switch (e.srcElement.innerHTML) {
      case 'Name':
        if (!this.sorted) {
          this.notSoredInfoData = this.infoData.slice();
          this.infoData.sort((a: any, b: any) => a.name.localeCompare(b.name));
          this.DataService.infoDataChange(this.infoData);
          this.sorted = !this.sorted;
          // console.log(this.notSoredInfoData);
        } else if (this.sorted) {
          this.infoData = this.notSoredInfoData;
          this.DataService.infoDataChange(this.infoData);
          this.sorted = !this.sorted;
        }
        break;

      case 'Deadline':
        if (!this.sorted) {
          this.notSoredInfoData = this.infoData.slice();
          this.infoData.sort(
            (a: any, b: any) => Number(a.madeDadeline) - Number(b.madeDadeline)
          );
          this.DataService.infoDataChange(this.infoData);
          this.sorted = !this.sorted;
          // console.log(this.notSoredInfoData);
        } else if (this.sorted) {
          this.infoData = this.notSoredInfoData;
          this.DataService.infoDataChange(this.infoData);
          this.sorted = !this.sorted;
        }
        break;

      case 'Score':
        if (!this.sorted) {
          this.notSoredInfoData = this.infoData.slice();
          this.infoData.sort((a: any, b: any) => b.score - a.score);
          this.DataService.infoDataChange(this.infoData);
          this.sorted = !this.sorted;
          // console.log(this.notSoredInfoData);
        } else if (this.sorted) {
          this.infoData = this.notSoredInfoData;
          this.DataService.infoDataChange(this.infoData);
          this.sorted = !this.sorted;
        }
        break;

      case 'Bugs':
        if (!this.sorted) {
          this.notSoredInfoData = this.infoData.slice();
          this.infoData.sort((a: any, b: any) => b.bugsCount - a.bugsCount);
          this.DataService.infoDataChange(this.infoData);
          this.sorted = !this.sorted;
          // console.log(this.notSoredInfoData);
        } else if (this.sorted) {
          this.infoData = this.notSoredInfoData;
          this.DataService.infoDataChange(this.infoData);
          this.sorted = !this.sorted;
        }
        break;

      case 'Days':
        if (!this.sorted) {
          this.notSoredInfoData = this.infoData.slice();
          this.infoData.sort(
            (a: any, b: any) => b.durationInDays - a.durationInDays
          );
          this.DataService.infoDataChange(this.infoData);
          this.sorted = !this.sorted;
          // console.log(this.notSoredInfoData);
        } else if (this.sorted) {
          this.infoData = this.notSoredInfoData;
          this.DataService.infoDataChange(this.infoData);
          this.sorted = !this.sorted;
        }
        break;
    }
    console.log(e.srcElement.innerHTML);
  }
}
