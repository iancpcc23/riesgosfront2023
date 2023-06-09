import { Component, OnInit, ViewChild } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { map } from 'jquery';
import { Subject, tap } from 'rxjs';
import { CuotasVencidas } from 'src/app/interfaces/cuotasVencidas.interface';
import { AgenciasService } from 'src/app/services/agencias.service';
import { CreditosService } from 'src/app/services/creditos.service';
import { HelpersService } from 'src/app/utils/helpers.service';
import {
  listaAgencias,
  listaAsesoresAgencia,
} from 'src/base/config/constantes';

@Component({
  selector: 'app-report-credits',
  templateUrl: './report-credits.component.html',
  styleUrls: ['./report-credits.component.css'],
})
export class ReportCreditsComponent implements OnInit {
  @ViewChild(DataTableDirective, { static: false })
  dtElement!: DataTableDirective;
  agencias: any[] = listaAgencias;

  asesoresAgencias: any[] = [];

  consultaCuotasVencidas:CuotasVencidas[]=[]
  agenciaSeleccionada: string = '2';
  asesorSeleccionado: string = '0';


  dtOptions: any = {};

  dtTrigger = new Subject<any>()

  constructor(
    private agenciaService: AgenciasService,
    private creditoService: CreditosService,
    private helperService: HelpersService
  ) {}

  ngOnInit(): void {
    this.dtOptions = {
      // pagingType: 'full_numbers',
      // pageLength: 10,
      language: {
        url: '//cdn.datatables.net/plug-ins/1.10.16/i18n/Spanish.json',
      },
      dom: 'Blfrtip',
      buttons: ['excel', 'pdf'],
    };
    this.dtTrigger.next(null);
  }

  handleAgencia() {
    console.log('UstedSelecciono', this.agenciaSeleccionada);

    this.asesoresAgencias = [...listaAsesoresAgencia].filter(
      (asesor) => asesor.codigoAgencia == this.agenciaSeleccionada
    );
  }

  handleSubmit() {
    let fecha = this.helperService.DateNow;

    console.log('asesor seleccionado', this.asesorSeleccionado);
    

    this.creditoService
      .getCuotasVencidasByAsesor$(
        fecha,
        this.agenciaSeleccionada,
        this.asesorSeleccionado
      )
      .pipe(
        tap((res) => {
          console.log('Respuesta', res);
        })
      )
      .subscribe(
        {next:(resp)=>{ this.consultaCuotasVencidas = resp
        this.rerender()
        } }
      );
  }
  ngAfterViewInit(): void {
    this.dtTrigger.next(null);
     }
    
    ngOnDestroy(): void {
        this.dtTrigger.unsubscribe();
     }
     rerender(): void {
      this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      // Destroy the table first
      dtInstance.destroy();
      // Call the dtTrigger to rerender again
      this.dtTrigger.next(null);
        });}
}
