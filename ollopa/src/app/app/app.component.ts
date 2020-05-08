import { Component, OnInit, Renderer2 } from '@angular/core';
import { ThemeService } from '../core/services/theme.service';

@Component({
  selector: 'apo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  theme: string;
  constructor(
    private themeService: ThemeService,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    this.initTheming();
  }

  private initTheming(): void {
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
