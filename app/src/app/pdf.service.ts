import { Http } from "@angular/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { PdfMedicamento } from "./models/pdfmedicamento";
import { PdfPaciente } from "./models/pdfpaciente";
import { PdfValoracion } from "./models/pdfvaloracion";

@Injectable()
export class PdfService {
//domain ="http://enfermeriaapi.globallifeambulancias.com";
domain ="http://localhost:3000";
  constructor(private http: Http) { }

  getData(value): Observable<PdfPaciente>{
    return this.http.get(this.domain + '/pdf/getPdfData/' + value).map(res=> res.json()).catch(this.handleError);
  }

  getValoracion(value): Observable<PdfValoracion>{
    return this.http.get(this.domain + '/pdf/getPdfValoracion/' + value).map(res=> res.json()).catch(this.handleError);
  }


  getMedicamentos(value): Observable<PdfMedicamento[]>{
    return this.http.get(this.domain + '/pdf/getPdfMedicamentos/' + value).map(res=> res.json()).catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}