import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoadingComponent} from './components/loading/loading.component';
import {MatDividerModule, MatProgressSpinnerModule, MatRadioModule, MatSnackBarModule} from '@angular/material';

@NgModule({
  declarations: [LoadingComponent],
  imports: [
    CommonModule,
    MatDividerModule,
    MatProgressSpinnerModule,
    MatRadioModule
  ],
  exports: [
    LoadingComponent,
    MatDividerModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatSnackBarModule
  ]
})
export class SharedModule {
}
