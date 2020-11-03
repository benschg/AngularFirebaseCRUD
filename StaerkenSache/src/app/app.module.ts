import { environment } from './../environments/environment.prod';
import { GreatExperiencesService } from './shared/great-experiences.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GreatExperiencesComponent } from './great-experiences/great-experiences.component';
import { GreatExperienceListComponent } from './great-experience-list/great-experience-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

@NgModule({
  declarations: [
    AppComponent,
    GreatExperiencesComponent,
    GreatExperienceListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule
  ],
  providers: [
    GreatExperiencesService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
