import { Component, OnInit } from '@angular/core';
import { RiesgosService } from 'src/app/services/riesgos.service';
import { MENU_OPTIONS, SCRIPT_NAMES } from 'src/base/config/constantes';
import { ListItem } from 'ng-multiselect-dropdown/multiselect.model';

import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(
    private riesgos: RiesgosService,
    private _authService: AuthService,
    private _router: Router
  ) {}

  OPTIONS_SIDEBAR = MENU_OPTIONS;

  isSidebarClose: boolean = false;

  ngOnInit(): void {
  }

  logout() {
    // this._authService.();
    this._router.navigateByUrl('/login');
  }
}
