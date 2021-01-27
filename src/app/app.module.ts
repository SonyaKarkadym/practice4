import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from './components/main/main.component';
import {PostsComponent} from './components/posts/posts.component';
import {UsersComponent} from './components/users/users.component';
import {PostComponent} from './components/posts/post/post.component';
import {PostInfoComponent} from './components/posts/post-info/post-info.component';
import {UserComponent} from './components/users/user/user.component';
import {UserInfoComponent} from './components/users/user-info/user-info.component';
import {HttpClientModule} from '@angular/common/http';
import {PostResolveService, UserResolveService} from './services';

const routes: Routes = [
  {
    path: '', component: MainComponent, children: [
      {
        path: 'users', component: UsersComponent, resolve: {users: UserResolveService}, children: [
          {path: ':id', component: UserInfoComponent}
        ]
      },
      {
        path: 'posts', component: PostsComponent, resolve: {posts: PostResolveService}, children: [
          {path: ':id', component: PostInfoComponent}
        ]
      }
    ]
  },
];

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    PostsComponent,
    UsersComponent,
    PostComponent,
    PostInfoComponent,
    UserComponent,
    UserInfoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
