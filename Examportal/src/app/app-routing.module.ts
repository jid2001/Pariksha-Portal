import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './Components/signup/signup.component';
import { LoginComponent } from './Components/login/login.component';
import { HomeComponent } from './Components/home/home.component';
import { AdminDashboardComponent } from './Components/admin/admin-dashboard/admin-dashboard.component';
import { UserDashboardComponent } from './Components/user/user-dashboard/user-dashboard.component';
import { AdminGuard } from './Services/admin.guard';
import { UserGuard } from './Services/user.guard';
import { ProfileComponent } from './Components/profile/profile.component';
import { WelcomeComponent } from './Components/admin/welcome/welcome.component';
import { ViewCategoriesComponent } from './Components/admin/view-categories/view-categories.component';
import { AddCategoryComponent } from './Components/admin/add-category/add-category.component';
import { ViewQuizzesComponent } from './Components/admin/view-quizzes/view-quizzes.component';
import { AddQuizComponent } from './Components/admin/add-quiz/add-quiz.component';
import { UpdateQuizComponent } from './Components/admin/update-quiz/update-quiz.component';
import { ViewQuestionsComponent } from './Components/admin/view-questions/view-questions.component';
import { LoadAllQuizComponent } from './Components/user/load-all-quiz/load-all-quiz.component';
import { InstuctionsOfQuizComponent } from './Components/user/instuctions-of-quiz/instuctions-of-quiz.component';
import { QuizStartComponent } from './Components/user/quiz-start/quiz-start.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'signup', component: SignupComponent, pathMatch: 'full' },
  { path: 'login', component: LoginComponent, pathMatch: 'full' },
  {
    path: 'admin-dashboard', component: AdminDashboardComponent, canActivate: [AdminGuard],
    children: [
      {
        path: 'profile', component: ProfileComponent,
      },
      {
        path: '', component: WelcomeComponent,
      },
      {
        path: 'categories', component: ViewCategoriesComponent
      },
      {
        path: 'addCategory', component: AddCategoryComponent
      },
      {
        path: 'quizzes', component: ViewQuizzesComponent
      },
      {
        path: 'add-quiz', component: AddQuizComponent
      },
      {
        path: 'update-quiz/:qid', component: UpdateQuizComponent
      },
      {
        path: 'view-questions/:id/:title', component: ViewQuestionsComponent
      }
    ]
  },
  {
    path: 'user-dashboard', component: UserDashboardComponent, pathMatch: 'full', canActivate: [UserGuard],
    children: [
      {
        path: ':cid',
        component: LoadAllQuizComponent, //cid=categoryId
      },
      {
        path: 'instructions/:qid',
        component: InstuctionsOfQuizComponent,
      },
    ],
  },
  {
    path: 'quizStart/:qid',
    component: QuizStartComponent,
    canActivate: [UserGuard],
  },
  {
    path: 'profile',
    component: ProfileComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
