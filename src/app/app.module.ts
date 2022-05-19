import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import {Route, RouterModule} from "@angular/router";

import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { UserComponent } from './components/user/user.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { PostComponent } from './components/post/post.component';
import { PostsComponent } from './components/posts/posts.component';
import { PostDetailsComponent } from './components/post-details/post-details.component';
import { HeaderComponent } from './components/header/header.component';
import {CommentComponent} from "./components/comment/comment.component";
import {CommentsComponent} from "./components/comments/comments.component";
import {CommentDetailsComponent} from "./components/comment-details/comment-details.component";
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';


const routes: Route[] = [
  {
    path:'', component:MainLayoutComponent, children:[
      {path: '', redirectTo: 'users', pathMatch: 'full'},
      {path:'users', component: UsersComponent, children: []},
      {path:'posts', component: PostsComponent, children: []},
      {path:'comments', component: CommentsComponent, children: []},
    ]
  }
]

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    UserDetailsComponent,
    PostComponent,
    PostsComponent,
    PostDetailsComponent,
    HeaderComponent,
    CommentComponent,
    CommentsComponent,
    CommentDetailsComponent,
    MainLayoutComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
