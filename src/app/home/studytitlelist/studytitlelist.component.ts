import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs/Observable';
import { Studytitle } from '../../shared/classes/studytitle';

@Component({
  selector: 'studytitlelist',
  templateUrl: './studytitlelist.component.html',
  styleUrls: ['./studytitlelist.component.css']
})
export class StudytitlelistComponent implements OnInit {

  public studytitlelist: Observable<any>;
  public studytitle= new Studytitle();
  @Output() idStudyUpdated = new EventEmitter<any>();
  constructor(public data: DataService) { }

  ngOnInit() {
    this.studytitlelist = this.data.getAllstudyTitle();
  }

  updateStudyTitle(id){
    this.studytitle.idStudy=id.value;
    this.idStudyUpdated.emit(this.studytitle)
    console.log(this.studytitle.idStudy);
  }

}
