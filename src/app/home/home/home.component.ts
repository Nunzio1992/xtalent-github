import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public workingProfile: Observable<any>;

  constructor(public data: DataService) { }

  ngOnInit() {

    this.workingProfile = this.data.getAll();

    console.log(this.workingProfile);

  }

}
