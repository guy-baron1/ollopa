import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { GlobalStoreState, GlobalStoreSelectors, GlobalStoreActions } from 'src/app/root-store/global-store';
import { Observable } from 'rxjs';

interface ButtonToRoute {
  name: string;
  route: string;
}

@Component({
  selector: 'apo-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  constructor(private store: Store<GlobalStoreState.State>) { }

  public searchValue: string;
  public section$: Observable<string> = this.store.select(
    GlobalStoreSelectors.selectGlobalSection
  );
  public buttonNamesToRoutes: ButtonToRoute[] = [
    {name: 'משימות', route: 'temp'},
    {name: 'תמציות', route: 'temp'},
    {name: 'גרף הידע', route: 'temp'},
    {name: 'מנועים', route: 'temp'},
  ];

  ngOnInit(): void {
    this.store.dispatch(new GlobalStoreActions.GetSectionRequestAction());
  }

  public search() {
    console.log(this.searchValue);
  }

}
