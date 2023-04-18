import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportesComponent } from './reportes/reportes.component';
import { HomeRoutingModule } from './home.routes';
import { RiesgosComponent } from './riesgos/riesgos.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from 'src/app/components/components.module';



@NgModule({
  declarations: [
    RiesgosComponent,
    ReportesComponent,

  ],
  imports: [
    CommonModule,
    ComponentsModule,
    FormsModule,
    ReactiveFormsModule,
    HomeRoutingModule,
    NgMultiSelectDropDownModule.forRoot(),

  ]
})
export class HomeModule { }
