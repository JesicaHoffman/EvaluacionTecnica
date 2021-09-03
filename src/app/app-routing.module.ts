import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostlistComponent } from './postlist/postlist.component';
import { PostdetailComponent } from './details/postdetail/postdetail.component';
import { Error404Component } from './error404/error404.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: "", component: HomeComponent},
  { path: "posts", component: PostlistComponent },
  { path: "posts/:id", component: PostdetailComponent },
  { path: "404", component: Error404Component },
  { path: "**", redirectTo: "/404" }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
