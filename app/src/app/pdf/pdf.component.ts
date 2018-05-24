import { Component, OnInit, ElementRef, ViewChild  } from '@angular/core';
import { PdfMedicamento } from '../models/pdfmedicamento';
import { PdfPaciente } from '../models/pdfpaciente';
import { PdfValoracion } from '../models/pdfvaloracion';
import { Observable } from 'rxjs/Observable';
import { PdfService } from '../pdf.service';
import { EmitterService } from '../services/emitter.service';
import { ValoracionEnfermeria } from '../models/valoracion';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: 'app-pdf',
    templateUrl: './pdf.component.html',
})
export class PdfComponent implements OnInit{

    data: PdfPaciente = {} as any; 
    medicamentos: PdfMedicamento[];
    valoracion: PdfValoracion = {} as any; 
    visita: ValoracionEnfermeria = {} as any;
    print: number;

    constructor(private pdfService: PdfService,
        private dataService: EmitterService,
        private activatedRoute: ActivatedRoute){

            this.print = 0;
    }

    ngOnInit(){
        this.activatedRoute.params.subscribe((params: Params) =>{
            this.getData(params['id_pac']);
            this.getMedicamentos(params['id_visita']);
            this.getValoracion(params['id_visita']);
        });
    }

    openPrint(){
        if(this.print == 3){
            window.print();
        }
    }

    getData(value){
        this.pdfService.getData(value).subscribe(data =>{
            this.data = data;
            this.print++;
            this.openPrint();
        });
    }

    getValoracion(value){
        this.pdfService.getValoracion(value).subscribe(data =>{
            this.valoracion = data;
            this.print++;
            this.openPrint();
        });
    }

    getMedicamentos(value){
        this.pdfService.getMedicamentos(value).subscribe(data =>{
            this.medicamentos = data;
            this.print++;
            this.openPrint();
        });
    }

    getPielIntegraSi(){
        if(this.valoracion.pielIntegra == "1"){ return "X"; }
        return "";
    }

    getPielIntegraNo(){
        if(this.valoracion.pielIntegra == "0"){ return "X"; }
        return "";
    }

    getPercepcion(){
        switch(this.valoracion.percepcion_sensorial){
            case 1:
                return "Completamente ilimitado";
            case 2:
                return "Muy Limitado";
            case 3:
                return "Levemente Limitado";
            case 4:
                return "Ninguna Limitacion";
        }

        return "";
    }

    getExposicionHumedad(){
        switch(this.valoracion.exposicion_humedad){
            case 1:
                return "Excesivamente húmeda";
            case 2:
                return "Muy húmeda";
            case 3:
                return "Ocasionalmente húmeda";
            case 4:
                return "Raramente húmeda";
        }

        return "";
    }

    getActividad(){
        switch(this.valoracion.actividad){
            case 1:
                return "Completamente inmóvil";
            case 2:
                return "Confinado a silla";
            case 3:
                return "Camina ocasionalmente";
            case 4:
                return "Camina frecuentemente";
        }

        return "";
    }

    getMovilidad(){
        switch(this.valoracion.movilidad){
            case 1:
                return "Completamente inmóvil";
            case 2:
                return "Muy limitado";
            case 3:
                return "Levemente limitado";
            case 4:
                return "Ninguna limitación";
        }

        return "";
    }

    getNutricion(){
        switch(this.valoracion.nutricion){
            case 1:
                return "Deficiente";
            case 2:
                return "Inadecuada";
            case 3:
                return "Adecuada";
            case 4:
                return "Excelente";
        }

        return "";
    }

    getFriccion(){
        switch(this.valoracion.friccion_cizallamiento){
            case 1:
                return "Problema requiere máximo cuidado";
            case 2:
                return "Problema potencial requiere mínimo cuidado";
            case 3:
                return "Sin Problema aparente";
        }

        return "";
    }

    getValoracionGeneral(value){
        switch(value){
            case 0:
                return "Incapaz de hacerlo";
            case 1:
                return "Intenta pero inseguro";
            case 3:
                return "Alguna Ayuda";
            case 4:
                return "Mínima ayuda";
            case 5:
                return "Independiente";
        }

        return "";
    }

    getValoracionGeneral2(value){
        switch(value){
            case 0:
                return "Incapaz de hacerlo";
            case 2:
                return "Intenta pero inseguro";
            case 5:
                return "Alguna Ayuda";
            case 8:
                return "Mínima ayuda";
            case 10:
                return "Independiente";
        }

        return "";
    }

    getValoracionGeneral3(value){
        switch(value){
            case 0:
                return "Incapaz de hacerlo";
            case 2:
                return "Intenta pero inseguro";
            case 10:
                return "Alguna Ayuda";
            case 14:
                return "Mínima ayuda";
            case 15:
                return "Independiente";
        }

        return "";
    }
}