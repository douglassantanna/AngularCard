import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReferenciaFormularioComponent } from './referencia-formulario/referencia-formulario.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [AppComponent, ReferenciaFormularioComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatChipsModule,
    FlexLayoutModule,
    MatDividerModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
