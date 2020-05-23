import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  GlobalStoreState,
  GlobalStoreSelectors,
  GlobalStoreActions,
} from 'src/app/root-store/global-store';
import { Observable } from 'rxjs';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

interface ButtonToRoute {
  name: string;
  route: string;
}

@Component({
  selector: 'apo-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(
    private store: Store<GlobalStoreState.State>,
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer
  ) {
    iconRegistry.addSvgIcon(
      'search',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/icon/search.svg')
    );
  }

  public searchValue: string;
  public section$: Observable<string> = this.store.select(
    GlobalStoreSelectors.selectGlobalSection
  );
  public buttonNamesToRoutes: ButtonToRoute[] = [
    { name: 'משימות', route: '/missions' },
    { name: 'תמציות', route: '/search/gists' },
    { name: 'גרף הידע', route: '/knowledge-graph' },
    { name: 'מנועים', route: '/engines' },
  ];

  ngOnInit(): void {
    this.store.dispatch(new GlobalStoreActions.GetSectionRequestAction());
  }

  public search() {
    console.log(this.searchValue);
  }
}
