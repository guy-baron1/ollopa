import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { LocalStorageService } from './local-storage.service';

const THEME_LOCAL_STORAGE_KEY = 'THEME';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private themes: string[] = ['orange', 'yellow', 'green', 'blue', 'indigo', 'teal', 'brown'];
  private theme = new Subject<string>();
  public appTheme: Observable<string> = this.theme.asObservable();

  constructor(private localStorageService: LocalStorageService) {}

  getAvailableThemes(): string[] {
    return this.themes;
  }

  setTheme(newTheme: string): void {
    this.theme.next(newTheme);
    this.localStorageService.setItem(THEME_LOCAL_STORAGE_KEY, newTheme);
  }

  getInitialTheme(): string {
    return this.localStorageService.getItem(THEME_LOCAL_STORAGE_KEY);
  }
}
