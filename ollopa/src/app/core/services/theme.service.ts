import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private themes: string[] = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo'];
  private theme = new Subject<string>();
  public appTheme: Observable<string> = this.theme.asObservable();

  getAvailableThemes(): string[] {
    return this.themes;
  }

  setTheme(newTheme: string): void {
    this.theme.next(newTheme);
  }
}
