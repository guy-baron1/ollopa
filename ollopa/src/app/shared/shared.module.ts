import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { SettingsDialogComponent } from './components/settings-dialog/settings-dialog.component';
import { MatSelectModule } from '@angular/material/select';

const materialModules = [
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatDialogModule,
  MatSelectModule,
];

@NgModule({
  declarations: [
    ToolbarComponent,
    SettingsDialogComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ...materialModules,
  ],
  exports: [
    ToolbarComponent,
    MatIconModule,
  ],
})
export class SharedModule { }
