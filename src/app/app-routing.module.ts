import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core'
import { FormRequestComponent } from "./home/form-request/form-request.component";
import { SkillListComponent } from "./home/skill-list/skill-list.component";
import { WorkingprofileFormComponent } from "./home/workingprofile-form/workingprofile-form.component";
import { RequestViewComponent } from "./home/request-view/request-view.component";

const routes: Routes = [
    { path: '', component: RequestViewComponent },
    { path: 'form-request', component: FormRequestComponent },
    { path: 'workingprofile-form', component: WorkingprofileFormComponent },
    { path: 'skilllist', component: SkillListComponent },
];

@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule {}