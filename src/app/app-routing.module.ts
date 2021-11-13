import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpacexComponent } from './spacex/spacex.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { StudentListComponent } from './student-list/student-list.component';

const routes: Routes = [
  {path:'',component:StudentDetailsComponent},
  {path:'list',component:StudentListComponent},
  {path:'details',component:StudentDetailsComponent},
  {path:'spacex',component:SpacexComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
