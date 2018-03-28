import { Component, OnInit } from '@angular/core';
import { Request } from "../../shared/classes/request";
import { Requestskills } from '../../shared/classes/requestskills';
import { Observable } from 'rxjs/Observable';
import { FormRequestService } from '../../services/form-request.service';
import { Accountmanager } from '../../shared/classes/accountmanager';
import { Requeststatus } from '../../shared/classes/requeststatus';
import { Router } from "@angular/router";

@Component({
  selector: 'app-form-request',
  templateUrl: './form-request.component.html',
  styleUrls: ['./form-request.component.css']
})
export class FormRequestComponent implements OnInit {

  request=new Request();
  requestskills: Requestskills[] = this.request.requestskills;
  accountmanager: Accountmanager = this.request.accountmanager;
  requeststatus: Requeststatus = this.request.requeststatus;

  constructor(private formrequestservice: FormRequestService, private router: Router) {}
  
  ngOnInit() {
    this.requeststatus.idStatus=1;
    this.accountmanager.idAccount=1;
  }
  
  get currentRequest(){{return JSON.stringify(this.request)}}
  get currentRequestskills(){{return JSON.stringify(this.requestskills)}}
  get currentAccountmanager(){{return JSON.stringify(this.accountmanager)}}
  get currentRequeststatus(){{return JSON.stringify(this.requeststatus)}}

  save(): void {

    console.log(this.request);
    this.formrequestservice.save(this.request).subscribe(
       result => {console.log(result.text()); if(result.text()=='insert OK'){ this.router.navigateByUrl('') }  }, err => {console.log(err); }
 )
  
}
}
