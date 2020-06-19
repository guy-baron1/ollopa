import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';

import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { SettingsDialogComponent } from './components/settings-dialog/settings-dialog.component';

const materialModules = [
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatDialogModule,
  MatSelectModule,
];

@NgModule({
  declarations: [ToolbarComponent, SettingsDialogComponent],
  imports: [CommonModule, HttpClientModule, RouterModule, ...materialModules],
  exports: [ToolbarComponent, MatIconModule],
})
export class SharedModule {}
