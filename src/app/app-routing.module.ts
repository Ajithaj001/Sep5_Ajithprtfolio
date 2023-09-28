import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { MainPageComponent } from './main-page/main-page.component';
import { ServiceComponent } from './service/service.component';

const routes: Routes = [
  {path:'', redirectTo:'/Home', pathMatch:'full'},
  {path:'Home', component:MainPageComponent},
  {path:'service', component:ServiceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
