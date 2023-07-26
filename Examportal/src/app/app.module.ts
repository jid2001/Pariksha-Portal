import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignupComponent } from './Components/signup/signup.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './Components/login/login.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {HttpClientModule} from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HomeComponent } from './Components/home/home.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import {MatIconModule} from '@angular/material/icon';
import { authInterceptorProvider } from './Services/auth.interceptor';
import { AdminDashboardComponent } from './Components/admin/admin-dashboard/admin-dashboard.component';
import { UserDashboardComponent } from './Components/user/user-dashboard/user-dashboard.component';
import { ProfileComponent } from './Components/profile/profile.component';
import { SidebarComponent } from './Components/admin/sidebar/sidebar.component';
import {MatListModule} from '@angular/material/list';
import { WelcomeComponent } from './Components/admin/welcome/welcome.component';
import { ViewCategoriesComponent } from './Components/admin/view-categories/view-categories.component';
import { AddCategoryComponent } from './Components/admin/add-category/add-category.component';
import { ViewQuizzesComponent } from './Components/admin/view-quizzes/view-quizzes.component';
import { AddQuizComponent } from './Components/admin/add-quiz/add-quiz.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSelectModule} from '@angular/material/select';
import { UpdateQuizComponent } from './Components/admin/update-quiz/update-quiz.component';
import { ViewQuestionsComponent } from './Components/admin/view-questions/view-questions.component';
import { AddQuestionComponent } from './Components/admin/add-question/add-question.component';
import { UpdateQuestionComponent } from './Components/admin/update-question/update-question.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { InstuctionsOfQuizComponent } from './Components/user/instuctions-of-quiz/instuctions-of-quiz.component';
import { LoadAllQuizComponent } from './Components/user/load-all-quiz/load-all-quiz.component';
import { QuizStartComponent } from './Components/user/quiz-start/quiz-start.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { UserSidebarComponent } from './Components/user/user-sidebar/user-sidebar.component';
import { UserNavbarComponent } from './Components/user/user-navbar/user-navbar.component';
import {MatSidenavModule} from '@angular/material/sidenav';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    NavbarComponent,
    AdminDashboardComponent,
    UserDashboardComponent,
    ProfileComponent,
    SidebarComponent,
    WelcomeComponent,
    ViewCategoriesComponent,
    AddCategoryComponent,
    ViewQuizzesComponent,
    AddQuizComponent,
    UpdateQuizComponent,
    ViewQuestionsComponent,
    AddQuestionComponent,
    UpdateQuestionComponent,
    InstuctionsOfQuizComponent,
    LoadAllQuizComponent,
    QuizStartComponent,
    UserSidebarComponent,
    UserNavbarComponent,
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    FormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatSlideToggleModule,
    MatSelectModule,
    CKEditorModule,
    MatProgressSpinnerModule,
    MatSidenavModule

  ],
  providers: [authInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
