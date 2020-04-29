import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'apo-settings-dialog',
  templateUrl: './settings-dialog.component.html',
  styleUrls: ['./settings-dialog.component.scss'],
})
export class SettingsDialogComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<SettingsDialogComponent>) {}
  selectedColor: string;
  colors: string[] = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo'];
  selectedSection: string;
  sections: string[] = ['הרצליה', 'גן יבנה', 'אור יהודה', 'חולון'];

  ngOnInit(): void {
    // todo: get sections/current section and theme from store/local storage
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
