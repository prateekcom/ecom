import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { TopBarComponent } from './top-bar/top-bar.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ApiLearnComponent } from './api-learn/api-learn.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    LoginPageComponent,
    HomeComponent,
    DashboardComponent,
    ApiLearnComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path:'',component: HomeComponent  },
      { path:'login',component:LoginPageComponent },
      { path:'welcome' ,component:DashboardComponent },
      { path:'api-learn',component:ApiLearnComponent },
      { path:'products/:productId',component:HomeComponent }  
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
