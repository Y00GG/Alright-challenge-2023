import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MyDocumentsComponent } from './my-documents/my-documents.component';
import { MyReviewsComponent } from './my-reviews/my-reviews.component';
import { HistoryComponent } from './history/history.component';
import { CreateReviewerComponent } from './create-reviewer/create-reviewer.component';
import { RegisterComponent } from './register/register.component';
import { LogsComponent } from './logs/logs.component';
import { authGuard } from './Guards/auth.guard';
import { noAuthGuard } from './Guards/no-auth.guard';

const routes: Routes = [
  {
    path: 'home',
    component: LoginComponent,
    canActivate: [ noAuthGuard]
  },
  {
    path: 'my-documents',
    component: MyDocumentsComponent,
    canActivate: [ authGuard]
  },
  {
    path: 'my-reviews',
    component: MyReviewsComponent,
    canActivate: [ authGuard]
  },
  {
    path: 'history',
    component: HistoryComponent,
    canActivate: [ authGuard]
  },
  {
    path: 'create-reviewer',
    component: CreateReviewerComponent,
    canActivate: [ authGuard]
  },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [ authGuard]
  },
  {
    path: 'logs',
    component: LogsComponent,
    canActivate: [ authGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
