import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { PdfMedicamento } from './models/pdfmedicamento';
import { PdfPaciente } from './models/pdfpaciente';
import { PdfValoracion } from './models/pdfvaloracion';

@Injectable()
export class PdfService {
// domain ="http://enfermeriaapi.globallifeambulancias.com";
domain = 'http://localhost:3000';
  constructor(private http: HttpClient) { }

  getData(value): Observable<PdfPaciente> {
    return this.http.get<PdfPaciente>(this.domain + '/pdf/getPdfData/' + value);
  }

  getValoracion(value): Observable<PdfValoracion> {
    return this.http.get<PdfValoracion>(this.domain + '/pdf/getPdfValoracion/' + value);
  }

  getMedicamentos(value): Observable<PdfMedicamento[]> {
    return this.http.get<PdfMedicamento[]>(this.domain + '/pdf/getPdfMedicamentos/' + value);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
