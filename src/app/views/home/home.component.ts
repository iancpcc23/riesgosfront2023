import { FormControl, Validators } from '@angular/forms';
import {
  Observable,
  catchError,
  map,
  of,
  startWith,
  combineLatest,
  tap,
  combineLatestAll,
  mergeAll,
  forkJoin,
} from 'rxjs';

import { Component, OnInit } from '@angular/core';
import { RiesgosService } from 'src/app/services/riesgos.service';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { MENU_OPTIONS, SCRIPT_NAMES } from 'src/base/config/constantes';
import { ListItem } from 'ng-multiselect-dropdown/multiselect.model';
import {
  AppStateEntity,
  DataState,
} from 'src/2.data/entities/app-state.entity';
import { ResponseEntity } from 'src/2.data/entities/response.entity';
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

  OPTIONS_SIDEBAR = MENU_OPTIONS

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  logout() {
    // this._authService.();
    this._router.navigateByUrl('/login');
  }
}
