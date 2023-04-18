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
import { SCRIPT_NAMES } from 'src/base/config/constantes';
import { ListItem } from 'ng-multiselect-dropdown/multiselect.model';
import { AppStateEntity, DataState } from 'src/2.data/entities/app-state.entity';
import { ResponseEntity } from 'src/2.data/entities/response.entity';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})


export class HomeComponent implements OnInit {
  resultApi!: AppStateEntity<any>;
  controlDate = new FormControl('');
  controlMultiselect = new FormControl('');
  readonly DataState = DataState;
  endPointsScripts!: Observable<ResponseEntity>[];


  constructor(private riesgos: RiesgosService,
    private _authService: AuthService, private _router: Router
    
    ) { }

  dropdownList: ListItem[] = SCRIPT_NAMES; // SCRIPT_NAMES => variable with names SP in SQLSERVER  
  selectedItems: ListItem[] = [];
  dropdownSettings: IDropdownSettings = {
    singleSelection: false,
    idField: 'id',
    textField: 'text',
    selectAllText: 'Seleccionar Todo',
    unSelectAllText: 'Deseleccionar Todo',
    searchPlaceholderText: "Buscar",
    itemsShowLimit: 3,
    allowSearchFilter: true
  };


  ngOnInit() {



  }

  onItemSelect(item: ListItem) {
    if (this.selectedItems.some(it => it.id == item.id)) return
    this.selectedItems.push(item)
  }

  onSelectAll(items: ListItem[]) {
    this.selectedItems = items
  }

  validateFormControls() {

    if (this.selectedItems.length === 0) {
      this.controlMultiselect.setErrors({ items: 'Seleccione almenos 1 item!' });
      return false;
    }

    if (this.controlDate.value === '') {
      this.controlDate.setErrors({ fecha: 'Escoja una fecha correcta' });
      return false;
    }

    return true;
  }


  onSubmit(): void {

    if (!this.validateFormControls()) return

    const endPointList = this.generateUrlsToForkJoin(this.selectedItems, this.controlDate.value!);
    console.log('Endpoints', endPointList);

    forkJoin(endPointList)
      .pipe(
        map((res) => {
          return { state: DataState.LOADED, data: res };
        }),
        startWith({ state: DataState.LOADING }),
        catchError((error) => {
          console.log('Entro al catch');
          return of({ state: DataState.ERROR, error: error });
        })
      ).subscribe((value) => {
        this.resultApi = value
      })
  }

  generateUrlsToForkJoin(namesScripts: ListItem[], date: string): Observable<AppStateEntity<ResponseEntity>>[] {

    const urlApis: Observable<AppStateEntity<ResponseEntity>>[] = [];
    for (const sp of namesScripts) {
      const urlApi = this.riesgos.runSP$(sp.text, date)
        .
        pipe(
          map((res) => { return { state: DataState.LOADED, data: res } }),
          catchError(error => of({ state: DataState.ERROR, error: error.message }))
        );
      urlApis.push(urlApi)
    }
    return urlApis;
  }
  logout() {
    // this._authService.();
    this._router.navigateByUrl("/login")
  }

}
