import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component'
import { HomeComponent } from './home/home.component'
import { MemberListComponent } from './member/member-list/member-list.component';
import { FriendListComponent } from './friend-list/friend-list.component';
import { MessagesComponent } from './messages/messages.component';
import { MemberDetailsComponent } from './member/member-details/member-details.component';
import { MemberEditComponent } from './member/member-edit/member-edit.component';

const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'members', component: MemberListComponent },
  { path: 'friends', component: FriendListComponent },
  { path: 'messages', component: MessagesComponent },
  { path: 'members/:id', component: MemberDetailsComponent },
  { path: 'member/edit', component: MemberEditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
