import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportCreditsComponent } from './report-credits/report-credits.component';
import { DataTablesModule } from "angular-datatables";
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ReportCreditsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    DataTablesModule
  ]
})
export class CreditsModule { }
