import { Component, OnInit } from '@angular/core';
import { NovaReferencia, Referencias } from '../referencia';

@Component({
  selector: 'app-referencia-formulario',
  templateUrl: './referencia-formulario.component.html',
  styleUrls: ['./referencia-formulario.component.css'],
})
export class ReferenciaFormularioComponent implements OnInit {
  referencia = {
    titulo: "titulo01",
    link: "titulo02",
    tag: "titulo03"
  } as NovaReferencia;

  constructor() {}

  ngOnInit(): void {
    //console.log('estou aqui');
  }
  //não está funcionando por causa do mat-dialog-close
  onSubmit() {
    };
}

