import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input.component';
import { DangerComponent } from './danger/danger.component';
import { SuccessComponent } from './success/success.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { LoadingPageComponent } from './loading-page/loading-page.component';
import { SuccessBoxComponent } from './success-box/success-box.component';



@NgModule({
  declarations: [
    InputComponent,
    DangerComponent,
    SuccessComponent,
    SpinnerComponent,
    ProgressBarComponent,
    LoadingPageComponent,
    SuccessBoxComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports:[
    InputComponent,
    DangerComponent,
    SuccessComponent,
    SpinnerComponent,
    ProgressBarComponent,
    LoadingPageComponent,
    SuccessBoxComponent
  ]
})
export class ComponentsModule { }
