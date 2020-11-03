import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GreatExperienceComponent } from './great-experience/great-experience.component';
import { GreatExperiencesComponent } from './great-experiences/great-experiences.component';
import { GreatExperienceListComponent } from './great-experience-list/great-experience-list.component';

@NgModule({
  declarations: [
    AppComponent,
    GreatExperienceComponent,
    GreatExperiencesComponent,
    GreatExperienceListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
