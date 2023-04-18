import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { PageNotFoundComponentComponent } from '../page-not-found-component/page-not-found-component.component';
import { RiesgosComponent } from './riesgos/riesgos.component';
import { ReportesComponent } from './reportes/reportes.component';
import { HomeComponent } from './home.component';

const homeRoutes = [ 
    { 
        path: '', 
        component: HomeComponent, 
        children: [ 
            { 
                path: 'riesgos', 
                component: RiesgosComponent 
            },
            { 
                path: 'reportes', 
                component: ReportesComponent 
            }
        
        
        ] 
    }]; 

@NgModule({
  imports: [RouterModule.forChild(homeRoutes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
