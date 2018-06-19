import { MedicamentosComponent } from './components/medicamentos/medicamentos.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { UserselectComponent } from './components/userselect/userselect.component';
import { PdfComponent } from './pdf/pdf.component';


const appRoutes: Routes = [
  { path: '',   component: UserselectComponent},
  { path: 'selectuser',   component: UserselectComponent},
  { path: 'visita/:id',   component: UserselectComponent},
  { path: 'visita/:id_pac/:id_visita',   component: MedicamentosComponent},
  { path: 'visita/:id_pac/:id_visita/:usuario',   component: MedicamentosComponent},
  { path: 'visita',   component: MedicamentosComponent},
  { path: 'pdf',   component: PdfComponent},
  { path: 'pdf/:id_pac/:id_visita',   component: PdfComponent},
  { path: '**', redirectTo: '' }
];

@NgModule({
  declarations: [
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [],
  bootstrap: [],
  exports: [RouterModule]
})

export class AppRoutingModule {

 }
