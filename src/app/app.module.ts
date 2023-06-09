import AppComponent from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { ComponentsModule } from './components/components.module';
// import { HomeComponent } from './views/home/home.component';
import { HttpClientModule } from '@angular/common/http';
// import { LoginComponent } from './views/login/login.component';
import { NgModule } from '@angular/core';
import { PageNotFoundComponentComponent } from './views/page-not-found-component/page-not-found-component.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './views/register/register.component';
import { DataModule } from 'src/2.data/data.module';
import { LoginComponent } from './views/login/login.component';
import { HomeComponent } from './views/home/home.component';
import { HomeModule } from './views/home/home.module';
import { ResetPasswordComponent } from './views/reset-password/reset-password.component';

import { DataTablesModule } from "angular-datatables";
import { UserLoginUseCase } from 'src/1.domain/usecases/user-login.usecase';
import { UserCreatePasswordUseCase } from 'src/1.domain/usecases/Users/user-create-password.usecase';
@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponentComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ResetPasswordComponent,
  ],
  providers: [ UserLoginUseCase, UserCreatePasswordUseCase ], 
  bootstrap: [AppComponent],
  imports: [
    ComponentsModule,
    HttpClientModule,
    BrowserModule,
    DataTablesModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    DataModule,
    HomeModule,
  ],
})
export class AppModule {}
