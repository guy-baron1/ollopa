import { Component, OnInit } from '@angular/core';

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
  public searchValue: string;
  public buttonNamesToRoutes: ButtonToRoute[] = [
    {name: 'משימות', route: 'temp'},
    {name: 'תמציות', route: 'temp'},
    {name: 'גרף הידע', route: 'temp'},
    {name: 'לא זוכר', route: 'temp'},
  ];
  constructor() { }

  ngOnInit(): void {
    // todo: get section from store?
  }

  public search() {
    console.log(this.searchValue);
  }

}
