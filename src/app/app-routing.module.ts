import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { DetailviewComponent } from './detailview/detailview.component';

const routes: Routes = [
  {path:'', redirectTo:'/Homepage', pathMatch:'full'},
  {path:'Homepage', component:HomepageComponent, children:[
    {path:'details', component:DetailviewComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
