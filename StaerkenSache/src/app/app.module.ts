import { GreatExperiencesService } from './shared/great-experiences.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GreatExperiencesComponent } from './great-experiences/great-experiences.component';
import { GreatExperienceListComponent } from './great-experience-list/great-experience-list.component';
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    GreatExperiencesComponent,
    GreatExperienceListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    GreatExperiencesService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
