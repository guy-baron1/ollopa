import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private theme = new Subject<string>();
  public appTheme: Observable<string> = this.theme.asObservable();

  setTheme(newTheme: string): void {
    this.theme.next(newTheme);
  }
}
