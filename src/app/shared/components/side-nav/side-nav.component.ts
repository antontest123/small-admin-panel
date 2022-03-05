import { Component, OnInit } from '@angular/core';
import { IPage } from '../../interfaces/page.interface';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  pages: IPage[] = [
    { name: 'News', link: '/main/news', icon: 'feed',},
    { name: 'Clients', link: '/main/clients', icon: 'people_alt',},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
