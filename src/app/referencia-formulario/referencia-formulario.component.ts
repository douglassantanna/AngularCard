import { Component, OnInit } from '@angular/core';
import { Referencias } from '../referencia';

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
  } as Referencias;

  constructor() {}

  ngOnInit(): void {
    //console.log('estou aqui');
  }
  //não está funcionando por causa do mat-dialog-close
  onSubmit() {
    this.referencia.preview = {
      titulo: 'previewMoc',
      image: 'https://cdn.neemo.com.br/uploads/settings_webdelivery/logo/996/notfound.png',
      url: this.referencia.link,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
    };
  }
}
