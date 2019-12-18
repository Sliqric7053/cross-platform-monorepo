import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  imports: [
    CommonModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    MatDialogModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatRadioModule,
    MatInputModule,
    MatSnackBarModule,
    MatTabsModule,
    MatFormFieldModule,
    MatStepperModule,
    MatGridListModule,
    MatMenuModule,
    MatTooltipModule
  ],
  exports: [
    MatCheckboxModule,
    MatSlideToggleModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatDialogModule,
    MatRadioModule,
    MatInputModule,
    MatSnackBarModule,
    MatTabsModule,
    MatFormFieldModule,
    MatStepperModule,
    MatGridListModule,
    MatMenuModule,
    MatTooltipModule
  ],
  declarations: []
})
export class AngularMaterialModule {}
