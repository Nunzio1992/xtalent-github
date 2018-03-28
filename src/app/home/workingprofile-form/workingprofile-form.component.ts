import { Component, OnInit, Input } from '@angular/core';
import { Workingprofile } from '../../shared/classes/workingprofile';
import { Studytitle } from '../../shared/classes/studytitle';




@Component({
  selector: 'workingprofile-form',
  templateUrl: './workingprofile-form.component.html',
  styleUrls: ['./workingprofile-form.component.css']
})
export class WorkingprofileFormComponent implements OnInit {

  worker= new Workingprofile();
  studytitle=this.worker.studytitle;
  constructor() { }

  ngOnInit() {
  }

  output(){
    console.log(this.worker);
  }

  get currentWorker(){{ return JSON.stringify(this.worker); }}
  
  handle(studytitle){
    this.studytitle.idStudy = studytitle.idStudy;
    console.log(studytitle.idStudy)
  }
 
}
