import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HelpersService {
  constructor() {}

  get DateNow(): string {
    const currentDate = new Date();
    const dia = currentDate.getDate().toString().padStart(2, '0');
    const mes = (currentDate.getMonth() + 1).toString().padStart(2, '0'); // Los meses comienzan en 0
    const anio = currentDate.getFullYear().toString();
    const fechaDDMMYYYY = dia + mes + anio;
    return fechaDDMMYYYY;
  }
}
