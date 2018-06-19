import { Paciente } from './models/pacientes';
import { historial_medicamentos } from './models/historial_medicamentos';
import { Medicamento } from './models/medicamento';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { ValoracionEnfermeria } from './models/valoracion';

@Injectable()
export class HistorialService {
// domain ="http://enfermeriaapi.globallifeambulancias.com";
domain = 'http://localhost:3000';
  constructor(private http: HttpClient) { }

  getMedicamentos(): Observable<Medicamento[]> {
    return this.http.get<Medicamento[]>(this.domain + '/medicamento/getAll');
  }

  getPacientes(): Observable<Paciente[]> {
    return this.http.get<Paciente[]>(this.domain + '/pacientes/getListPacientes');
  }

  getHistorialPaciente(id): Observable<historial_medicamentos[]> {
    return this.http.get<historial_medicamentos[]>(this.domain + '/seguimiento/getAll/' + id);

  }

  addMedicamentoHist(data: historial_medicamentos): Observable<historial_medicamentos[]> {
    return this.http.post<historial_medicamentos[]>(this.domain + '/seguimiento/add', data);
  }

  addValoracionPaciente(data: ValoracionEnfermeria): Observable<any> {
    return this.http.post(this.domain + '/valoracion/add', data);


  }

  updateValoracionPaciente(data: ValoracionEnfermeria): Observable<any> {
    return this.http.put(this.domain + '/valoracion/update/' + data.Id_ValSegEnf.toString(), data);

  }

  getValoracionListPaciente(id): Observable<ValoracionEnfermeria[]> {
    return this.http.get<ValoracionEnfermeria[]>(this.domain + '/valoracion/getAll/' + id);

  }

  deleteHistPaciente(id): Observable<historial_medicamentos[]> {
    return this.http.delete<historial_medicamentos[]>(this.domain + '/seguimiento/delete/' + id.toString());

  }

  getVisitaHistorica(id_pac, id_visita): Observable<ValoracionEnfermeria> {
    return this.http.get<ValoracionEnfermeria>(this.domain + '/valoracion/get/' + id_pac + '/' + id_visita);


  }

  getUserInfo(id_usu): Observable<any> {
    return this.http.get(this.domain + '/pacientes/getUserInfo/' + id_usu);

  }

  loadFile(data): Observable<any> {
    return this.http.post(this.domain + '/seguimiento/uploadFile', data);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}

