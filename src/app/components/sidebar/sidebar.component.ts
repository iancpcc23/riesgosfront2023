import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { MENU_OPTIONS } from 'src/base/config/constantes';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  OPTIONS_SIDEBAR = MENU_OPTIONS;
  isSubmenuOpen: boolean = false;
  @ViewChildren('myDiv') myDivs: QueryList<ElementRef> | undefined;
  toogleSubMenu(event:any) {
    console.log('Diste click', this);
    this.isSubmenuOpen = !this.isSubmenuOpen
  }
}
