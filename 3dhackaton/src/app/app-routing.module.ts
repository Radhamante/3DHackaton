import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {QuestionItemComponent} from "./question-item/question-item.component";
import {QuestionsComponent} from "./questions/questions.component";
import {VisualizerComponent} from "./visualizer/visualizer.component";

const routes: Routes = [
  { path: 'categorie/:id', component: QuestionItemComponent },
  { path: 'question/:id', component: VisualizerComponent },
  { path: '', component: QuestionsComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
