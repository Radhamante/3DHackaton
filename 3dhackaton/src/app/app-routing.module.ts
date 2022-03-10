import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {QuestionItemComponent} from "./question-item/question-item.component";
import {QuestionsComponent} from "./questions/questions.component";

const routes: Routes = [
  { path: 'categorie/:id', component: QuestionItemComponent },
  { path: '', component: QuestionsComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
