import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ThemeService } from 'src/app/core/services/theme.service';
import { Store } from '@ngrx/store';
import { GlobalStoreState, GlobalStoreSelectors, GlobalStoreActions } from 'src/app/root-store/global-store';
import { Observable } from 'rxjs';

@Component({
  selector: 'apo-settings-dialog',
  templateUrl: './settings-dialog.component.html',
  styleUrls: ['./settings-dialog.component.scss'],
})
export class SettingsDialogComponent implements OnInit {
  constructor(private dialogRef: MatDialogRef<SettingsDialogComponent>,
              private themeService: ThemeService,
              private store: Store<GlobalStoreState.State>) {}
  selectedTheme: string;
  themes: string[];
  selectedSection$: Observable<string> = this.store.select(
    GlobalStoreSelectors.selectGlobalSection
  );
  sections: string[] = ['הרצליה', 'גן יבנה', 'אור יהודה', 'חולון'];

  ngOnInit(): void {
    // TODO: get sections from server
    this.themes = this.themeService.getAvailableThemes();
    this.store.dispatch(new GlobalStoreActions.GetSectionRequestAction());
  }

  onColorClicked(theme: string) {
    this.selectedTheme = theme;
    this.themeService.setTheme(this.selectedTheme);
  }

  onSectionChanged(section: string) {
    this.store.dispatch(new GlobalStoreActions.SetSectionRequestAction({ section }));
  }

  onConfirm(): void {
    this.dialogRef.close();
  }
}
