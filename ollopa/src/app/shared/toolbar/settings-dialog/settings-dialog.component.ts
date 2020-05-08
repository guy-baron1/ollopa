import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ThemeService } from 'src/app/core/services/theme.service';

@Component({
  selector: 'apo-settings-dialog',
  templateUrl: './settings-dialog.component.html',
  styleUrls: ['./settings-dialog.component.scss'],
})
export class SettingsDialogComponent implements OnInit {
  constructor(private dialogRef: MatDialogRef<SettingsDialogComponent>,
              private themeService: ThemeService) {}
  selectedTheme: string;
  themes: string[];
  selectedSection: string;
  sections: string[] = ['הרצליה', 'גן יבנה', 'אור יהודה', 'חולון'];

  ngOnInit(): void {
    this.themes = this.themeService.getAvailableThemes();
  }

  onColorClicked(theme: string) {
    this.selectedTheme = theme;
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onConfirm(): void {
    this.themeService.setTheme(this.selectedTheme);
    this.dialogRef.close();
  }
}
