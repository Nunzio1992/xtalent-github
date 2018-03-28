import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'request-view',
  templateUrl: './request-view.component.html',
  styleUrls: ['./request-view.component.css']
})
export class RequestViewComponent implements OnInit {
  public requestlist: Observable<any>;
  constructor(public data:DataService) { }

  ngOnInit() {
    this.requestlist = this.data.getAllRequest();
  }



  
 openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

 closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

}
