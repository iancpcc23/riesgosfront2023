import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { MENU_OPTIONS } from 'src/base/config/constantes';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  OPTIONS_SIDEBAR = MENU_OPTIONS;
  isSubmenuOpen: boolean = false;
  isSidebarClose: boolean = false;
  currentItem: number = -1;
  @Output() sidebarClose = new EventEmitter<boolean>();

  toggleSubMenu(event: any, index: number) {
    event.preventDefault();
    if (index != this.currentItem) {
      this.isSubmenuOpen = false;
    }
    this.isSubmenuOpen = !this.isSubmenuOpen;
    this.currentItem = index;
  }

  constructor(
    private elementRef: ElementRef,
    private authService: AuthService,
    private router: Router
  ) {}

  toggleSidebar(event: any) {
    // const sidebar = this.elementRef.nativeElement.querySelector('.sidebar');
    // sidebar.classList.toggle('hidde_menu');
    this.isSidebarClose = !this.isSidebarClose;
    this.isSubmenuOpen = false;
    this.sidebarClose.emit(this.isSidebarClose);
  }

  logout() {
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }
}
