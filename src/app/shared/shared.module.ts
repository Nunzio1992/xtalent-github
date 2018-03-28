import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { MaterializeModule } from "angular2-materialize";
import { FormRequestComponent } from '../home/form-request/form-request.component';
import { WorkingprofileFormComponent } from '../home/workingprofile-form/workingprofile-form.component';
import { StudytitlelistComponent } from '../home/studytitlelist/studytitlelist.component';
import { AccountManagerListComponent } from '../home/account-manager-list/account-manager-list.component';
import { BusinessUnitListComponent } from '../home/business-unit-list/business-unit-list.component';
import { SkillListComponent } from '../home/skill-list/skill-list.component';
import { JobTitleListComponent } from '../home/job-title-list/job-title-list.component';
import { RequestViewComponent } from '../home/request-view/request-view.component';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';


@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    RouterModule,
    MaterializeModule
  ],
  declarations: [FormRequestComponent,
    WorkingprofileFormComponent,
    StudytitlelistComponent,
    AccountManagerListComponent,
    BusinessUnitListComponent,
    SkillListComponent,
    JobTitleListComponent,
    RequestViewComponent],
  exports: [
    FormsModule,
    MaterializeModule,FormRequestComponent,
    WorkingprofileFormComponent,
    StudytitlelistComponent,
    AccountManagerListComponent,
    BusinessUnitListComponent,
    SkillListComponent,
    JobTitleListComponent,
    RequestViewComponent,
    AppRoutingModule
  ]
})
export class SharedModule { }