import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { SettingsDialogComponent } from './toolbar/settings-dialog/settings-dialog.component';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    ToolbarComponent,
    SettingsDialogComponent,
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    HttpClientModule,
    MatDialogModule,
    MatSelectModule,
  ],
  exports: [
    ToolbarComponent,
    MatIconModule,
  ],
})
export class SharedModule { }
