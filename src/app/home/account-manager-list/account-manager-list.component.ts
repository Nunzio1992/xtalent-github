import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'account-manager-list',
  templateUrl: './account-manager-list.component.html',
  styleUrls: ['./account-manager-list.component.css']
})
export class AccountManagerListComponent implements OnInit {

  public accountmanagerlist: Observable<any>;
  constructor(public data: DataService) { };


  ngOnInit() {
    this.accountmanagerlist= this.data.getAllAccountManager();
  }

}
