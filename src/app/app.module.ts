import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostlistComponent } from './postlist/postlist.component';
import { PostdetailComponent } from './details/postdetail/postdetail.component';
import { Error404Component } from './error404/error404.component';
import { CommentsComponent } from './details/comments/comments.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    PostlistComponent,
    PostdetailComponent,
    Error404Component,
    CommentsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
