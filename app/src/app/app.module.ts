import { AppRoutingModule } from './app.routing.module';
import { EmitterService } from './services/emitter.service';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';
import { MatFileUploadModule } from 'angular-material-fileupload';
import {FileUploadModule} from 'ng2-file-upload';

import 'hammerjs';

import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatNativeDateModule,
  MatSelectModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatFormFieldModule,

} from '@angular/material';
import { MedicamentosComponent } from './components/medicamentos/medicamentos.component';
import { HistorialService } from './historial.service';
import { UserselectComponent } from './components/userselect/userselect.component';
import { PdfComponent } from './pdf/pdf.component';
import { PdfService } from './pdf.service';

@NgModule({
  declarations: [
    AppComponent,
    MedicamentosComponent,
    UserselectComponent,
    PdfComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatAutocompleteModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    HttpClientModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    MatTabsModule,
    MatCheckboxModule,
    MatCardModule,
    MatSlideToggleModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatSnackBarModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatExpansionModule,
    MatFileUploadModule,
    FileUploadModule
  ],
  providers: [HistorialService, HttpClientModule, EmitterService, PdfService],
  bootstrap: [AppComponent]
})
export class AppModule { }
