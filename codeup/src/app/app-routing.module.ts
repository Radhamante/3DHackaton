import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ForumComponent} from "./forum/forum.component";
import {PostComponent} from "./post/post.component";
import {SearchComponent} from "./search/search.component";
import {AccountComponent} from "./account/account.component";


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path : 'forum/:id', component: ForumComponent },
  { path : 'comment/:id', component: ForumComponent },
  { path : 'post/:id', component: PostComponent },
  { path : 'search', component: SearchComponent },
  { path : 'account/:id', component: AccountComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
