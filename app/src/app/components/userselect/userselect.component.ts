import { ValoracionEnfermeria } from './../../models/valoracion';
import { Paciente } from './../../models/pacientes';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { HistorialService } from './../../historial.service';
import { ActivatedRoute, Router } from '@angular/router';
import { map, startWith, switchMap, debounceTime} from 'rxjs/operators';
import { EmitterService } from '../../services/emitter.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-userselect',
  templateUrl: './userselect.component.html',
  styleUrls: ['./userselect.component.css']
})
export class UserselectComponent implements OnInit {
  pacientes: Observable<Paciente[]>;
  visitas: Observable<ValoracionEnfermeria[]>;
  pacienteSelected: Paciente = {} as any;
  idProfesional;
  idSelected;

  myControl: FormControl = new FormControl();
  filteredPacientes: Observable<any>;


  constructor(private historialService: HistorialService,
              private dataService: EmitterService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {

    this.route.queryParams.subscribe((params) => {
      if (params['usuario']) {
        this.dataService.setIdPro(params['usuario']);
      }
    });

    this.getPacientes();

      this.filteredPacientes = this.myControl.valueChanges
        .pipe(
          startWith(null),
          debounceTime(200),
          switchMap(val => {
            return this.filter(val || '');
          })
        );
  }

  filter(val: string): Observable<any[]> {
    return this.pacientes
    .pipe(
      map(response => response.filter(option => {
        return option.nom_Pac.toLowerCase().indexOf(val.toLowerCase()) > -1;
      }))
    );
  }

  getPacientes() {
    this.pacientes = this.historialService.getPacientes();
  }

  getVisitasPaciente() {
    this.visitas = this.historialService.getValoracionListPaciente(this.pacienteSelected.iden_Pac);

  }

  displayFn(paciente: Paciente): string {
    if (paciente != null) {
        return paciente.nom_Pac + ' ' + paciente.ape_Pac;
    }
        return ' ';
  }

  getPacienteFromAuto(paciente: Paciente) {

      this.pacienteSelected = paciente;
      this.dataService.setPaciente(paciente);
      this.getVisitasPaciente();
  }

  openDetails(visita: ValoracionEnfermeria) {
    console.log(visita);
    this.router.navigate(['/visita', visita.iden_pac, visita.Id_ValSegEnf]);
    this.dataService.setVisita(visita);
  }

  openPdf(visita: ValoracionEnfermeria) {
    // window.open("http://enfermeriaapi.globallifeambulancias.com/pdf/" + visita.iden_pac + "/" + visita.Id_ValSegEnf, "_blank");
    this.router.navigate(['/pdf', visita.iden_pac, visita.Id_ValSegEnf]);
  }
}
