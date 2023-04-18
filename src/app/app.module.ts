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
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { DataModule } from 'src/2.data/data.module';
import { LoginComponent } from './views/login/login.component';
import { HomeComponent } from './views/home/home.component';
import { RiesgosComponent } from './views/home/riesgos/riesgos.component';
import { HomeModule } from './views/home/home.module';
@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponentComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
  imports: [
    ComponentsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    DataModule,
    HomeModule,
  ],
})
export class AppModule {}
