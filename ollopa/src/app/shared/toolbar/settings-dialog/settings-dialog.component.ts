import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ThemeService } from 'src/app/core/services/theme.service';

@Component({
  selector: 'apo-settings-dialog',
  templateUrl: './settings-dialog.component.html',
  styleUrls: ['./settings-dialog.component.scss'],
})
export class SettingsDialogComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<SettingsDialogComponent>,
              public themeService: ThemeService) {}
  selectedColor: string;
  colors: string[];
  selectedSection: string;
  sections: string[] = ['הרצליה', 'גן יבנה', 'אור יהודה', 'חולון'];

  ngOnInit(): void {
    this.colors = this.themeService.getAvailableColors();
  }

  onColorClicked(color: string) {
    this.selectedColor = color;
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onConfirm(): void {
    // todo: update new theme/section
    this.dialogRef.close();
  }
}
