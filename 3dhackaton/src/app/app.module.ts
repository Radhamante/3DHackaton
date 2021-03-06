import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatSidenavModule} from "@angular/material/sidenav";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatDividerModule} from "@angular/material/divider";
import { QuestionsComponent } from './questions/questions.component';
import {MatCardModule} from "@angular/material/card";
import { QuestionItemComponent } from './question-item/question-item.component';
import {MatListModule} from "@angular/material/list";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { VisualizerComponent } from './visualizer/visualizer.component';
import {MatStepperModule} from "@angular/material/stepper";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {CubeComponent} from "./cube/cube.component";

@NgModule({
  declarations: [
    AppComponent,
    QuestionsComponent,
    QuestionItemComponent,
    VisualizerComponent,
    CubeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    NgbModule,
    MatIconModule,
    MatButtonModule,
    MatExpansionModule,
    MatDividerModule,
    MatCardModule,
    MatListModule,
    FontAwesomeModule,
    MatStepperModule,
    MatProgressBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
