import { Component, OnInit, Renderer2 } from '@angular/core';
import { ThemeService } from '../core/services/theme.service';

@Component({
  selector: 'apo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    private themeService: ThemeService,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    // TODO: initial functions: get section, auth, etc.
    this.initTheming();
  }

  private initTheming(): void {
    const initialTheme = this.themeService.getInitialTheme();
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
