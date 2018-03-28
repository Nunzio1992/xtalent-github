import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaterializeModule } from "angular2-materialize";
import { FormRequestService } from "./services/form-request.service";
import { DataService } from './services/data.service';
import { HomeComponent } from './home/home/home.component';
import { BusinessUnitListComponent } from './home/business-unit-list/business-unit-list.component';
import { SkillListComponent } from './home/skill-list/skill-list.component';
import { JobTitleListComponent } from './home/job-title-list/job-title-list.component';
import { LoginComponent } from './home/login/login.component';
import { AccountManagerListComponent } from './home/account-manager-list/account-manager-list.component';
import { AppComponent } from './app.component';
import { FormRequestComponent } from './home/form-request/form-request.component';
import { Http, HttpModule } from '@angular/http';
import { WorkingprofileFormComponent } from './home/workingprofile-form/workingprofile-form.component';
import { StudytitlelistComponent } from './home/studytitlelist/studytitlelist.component';
import { AppRoutingModule } from './app-routing.module';
import { RequestViewComponent } from './home/request-view/request-view.component';
import { SharedModule } from './shared/shared.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    SharedModule
  ],
  providers: [
    FormRequestService,
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
