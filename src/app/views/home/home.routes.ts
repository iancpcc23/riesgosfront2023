import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { PageNotFoundComponentComponent } from '../page-not-found-component/page-not-found-component.component';
import { HomeComponent } from './home.component';
import { ReportCreditsComponent } from '../credits/report-credits/report-credits.component';
import { ProcessRisksComponent } from '../risks/process-risks/process-risks.component';

const homeRoutes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'riesgos/procesos',
        component: ProcessRisksComponent,
      },
      {
        path: 'creditos/reportes',
        component: ReportCreditsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(homeRoutes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
