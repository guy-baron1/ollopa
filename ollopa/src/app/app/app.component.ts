import { Component, OnInit, Renderer2 } from '@angular/core';
import { ThemeService, THEME_LOCAL_STORAGE_KEY, } from '../core/services/theme.service';
import { LocalStorageService } from '../core/services/local-storage.service';

@Component({
  selector: 'apo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  readonly themeLocalStorageKey = THEME_LOCAL_STORAGE_KEY;
  constructor(
    private themeService: ThemeService,
    private localStorageService: LocalStorageService,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    this.initTheming();
  }

  private initTheming(): void {
    const initialTheme = this.localStorageService.getItem(this.themeLocalStorageKey);
    if (initialTheme) {
      this.renderer.addClass(document.body, initialTheme);
    }

    // No need for unsubscribe because app.component will only be instanciated once (at startup)
    this.themeService.appTheme.subscribe((theme) => {
      this.themeService.getAvailableThemes().forEach((availableTheme) => {
        this.renderer.removeClass(document.body, availableTheme);
      });
      //  Adding the class to the body in order for it to be applied to
      //  components rendered in outside of app-root (for example dialogs)
      this.renderer.addClass(document.body, theme);
    });
  }
}
