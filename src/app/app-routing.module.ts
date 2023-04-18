import { RouterModule, Routes } from '@angular/router';

// import { HomeGuard } from './guards/home.guard';
// import { HomeComponent } from './views/home/home.component';
// import { LoginComponent } from './views/login/login.component';
import { NgModule } from '@angular/core';
import { PageNotFoundComponentComponent } from './views/page-not-found-component/page-not-found-component.component';
import { RegisterComponent } from './views/register/register.component';
import { LoginComponent } from './views/login/login.component';
import { HomeComponent } from './views/home/home.component';
import { HomeRoutingModule } from './views/home/home.routes';

const routes: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full"
  }
  ,
  {
    path: "login",
    component: LoginComponent,
    // canActivate:[AuthGuard]
  }
  , {
    path: "register",
    component: RegisterComponent
  }
  , {
    path: 'home',
    loadChildren: () => HomeRoutingModule 
    // component: HomeComponent,
    // canActivate: [HomeGuard]
  }
  , {
    path: '**',
    component: PageNotFoundComponentComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
