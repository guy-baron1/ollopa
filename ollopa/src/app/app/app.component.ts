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
    // Not unsubscribing because app.component will be instanciated only once (at startup)
    this.themeService.appTheme.subscribe((theme) => {
      this.removeExistingThemes();
      //  Adding the class to the body in order for it to be applied to
      //  components rendered in outside of app-root (for example dialogs)
      this.renderer.addClass(document.body, theme);
    });
  }

  removeExistingThemes(): void {
    this.themeService.getAvailableThemes().forEach((theme) => {
      this.renderer.removeClass(document.body, theme);
    });
  }
}
