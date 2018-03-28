import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'business-unit-list',
  templateUrl: './business-unit-list.component.html',
  styleUrls: ['./business-unit-list.component.css']
})
export class BusinessUnitListComponent implements OnInit {

  public businessunitlist: Observable<any>;
  constructor(public data: DataService) {  }

  ngOnInit() {
    this.businessunitlist = this.data.getAllBusinessUnit();
  }

}
