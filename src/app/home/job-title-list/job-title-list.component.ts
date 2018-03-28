import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'job-title-list',
  templateUrl: './job-title-list.component.html',
  styleUrls: ['./job-title-list.component.css']
})
export class JobTitleListComponent implements OnInit {
  public jobtitlelist: Observable<any>;
  constructor(public data:DataService) { }

  ngOnInit() {
    this.jobtitlelist= this.data.getAllJobTitle();
  }

}
