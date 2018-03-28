import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { DataService } from '../../services/data.service';
@Component({
  selector: 'skill-list',
  templateUrl: './skill-list.component.html',
  styleUrls: ['./skill-list.component.css']
})
export class SkillListComponent implements OnInit {

  public skilllist: Observable<any>;
  constructor(public data: DataService) { }

  ngOnInit() {
    this.skilllist= this.data.getAllSkill();
  }

  

}
