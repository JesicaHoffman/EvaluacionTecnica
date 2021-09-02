import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostlistComponent } from './postlist/postlist.component';
import { PostdetailComponent } from './details/postdetail/postdetail.component';
import { Error404Component } from './error404/error404.component';

const routes: Routes = [
  { path: "posts", component: PostlistComponent },
  { path: "post:id", component: PostdetailComponent },
  { path: "404", component: Error404Component }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
