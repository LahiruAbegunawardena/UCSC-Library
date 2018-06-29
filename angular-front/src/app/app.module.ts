import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { FlashMessageModule } from 'angular-flash-message';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { LoginpageComponent } from './components/loginpage/loginpage.component';
import { UserregisterComponent } from './components/userregister/userregister.component';
import { ReguserprofileComponent } from './components/reguserprofile/reguserprofile.component';
import { ReguserheaderComponent } from './components/reguserheader/reguserheader.component';
import { ReguserfooterComponent } from './components/reguserfooter/reguserfooter.component';
import { UsernavbarComponent } from './components/usernavbar/usernavbar.component';
import { UsersidebarComponent } from './components/usersidebar/usersidebar.component';
import { AdminsidebarComponent } from './components/adminsidebar/adminsidebar.component';
import { BooksComponent } from './components/books/books.component';
import { UserBorrowingsComponent } from './components/user-borrowings/user-borrowings.component';
import { UserFinesComponent } from './components/user-fines/user-fines.component';
import { AdmnprofileComponent } from './components/admnprofile/admnprofile.component';
import { AdmnnavbarComponent } from './components/admnnavbar/admnnavbar.component';
import { AdmnloginComponent } from './components/admnlogin/admnlogin.component';

import { AuthService } from './services/auth.service';
import { AdmnbooksComponent } from './components/admnbooks/admnbooks.component';
import { ManageusersComponent } from './components/manageusers/manageusers.component';
import { ManagebrrwsComponent } from './components/managebrrws/managebrrws.component';

const appRoutes: Routes = [

  //home page

  { path: '', component: HomepageComponent},
  { path: 'logPage', component: LoginpageComponent},
  { path: 'regUser', component: UserregisterComponent},

  //user profile

  { path: 'userProfile', component: ReguserprofileComponent},
  { path: 'books', component: BooksComponent},
  { path: 'myborrw', component: UserBorrowingsComponent},
  { path: 'userFines', component: UserFinesComponent},

  //admin profile

  { path: 'admnProfile', component:AdmnprofileComponent},
  { path: 'admnLog', component:AdmnloginComponent},
  { path: 'admnbook', component:AdmnbooksComponent},
  { path: 'mnguser', component:ManageusersComponent},
  { path: 'mngborrow', component:ManagebrrwsComponent},




  
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomepageComponent,
    LoginpageComponent,
    UserregisterComponent,
    ReguserprofileComponent,
    ReguserheaderComponent,
    ReguserfooterComponent,
    UsernavbarComponent,
    UsersidebarComponent,
    AdminsidebarComponent,
    BooksComponent,
    UserBorrowingsComponent,
    UserFinesComponent,
    AdmnprofileComponent,
    AdmnnavbarComponent,
    AdmnloginComponent,
    AdmnbooksComponent,
    ManageusersComponent,
    ManagebrrwsComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    FlashMessageModule
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
