import { MentoriaService } from './services/mentoria.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Referencias } from './referencia';
import { ReferenciaFormularioComponent } from './referencia-formulario/referencia-formulario.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  referencias: Referencias[] = [];

  constructor(public dialog: MatDialog, private service: MentoriaService) { }

  ngOnInit(): void {
    this.obterReferencias();
  }
  private obterReferencias() {
    this.service.obter().subscribe((x) => {
      this.referencias = x;
    });
  }

  abrirFormParaNovaReferencia() {
    const formularioNovaReferencia = this.dialog.open(ReferenciaFormularioComponent);
    
    formularioNovaReferencia.afterClosed().subscribe(novaReferencia => {
      this.service.criar(novaReferencia).subscribe((x) => {
        this.obterReferencias();
      });
    });
  }

  deletar(id:string){
    this.service.deletar(id).subscribe((x) => {
      this.obterReferencias();
    });
  }
}
