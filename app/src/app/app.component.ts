import {MatToolbarModule} from '@angular/material/toolbar';
import {MatExpansionModule} from '@angular/material/expansion'
import { MedicamentosComponent } from './components/medicamentos/medicamentos.component';
import { Component, OnInit } from '@angular/core';
import { EmitterService } from '../app/services/emitter.service';
import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  nombrePaciente = "";
  cedulaPac = "";
  ciudad = "";
  telefono = "";
  eps = "Ejercito";
  direccion = "";
  sexo = "";
  fechaNac = "";
  edad = "";
  nom_tipdoc = "";
  descrip_estado = "";
  subscription: Subscription;

  constructor(private dataService: EmitterService){
    this.subscription = this.dataService.getPaciente().subscribe((data)=>{
        this.nombrePaciente = data.nom_Pac.trim() + ' ' + data.ape_Pac.trim();
        this.cedulaPac = data.iden_Pac.trim();
        this.ciudad = data.ciudad.trim();
        this.telefono = data.cel_pac.trim();
        this.direccion = data.direc_pas.trim();
        this.sexo = data.nom_sex.trim();
        this.fechaNac = data.fnaci_pas.toString();
        this.edad = data.edad.toString();
        this.nom_tipdoc = data.nom_tipdoc.trim();
        this.descrip_estado = data.descrip_estado.trim();        
    })
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }
}
