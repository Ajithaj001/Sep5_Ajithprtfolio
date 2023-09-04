import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { DetailviewComponent } from './detailview/detailview.component';
import { TechnicalSKillsComponent } from './technical-skills/technical-skills.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    DetailviewComponent,
    TechnicalSKillsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
