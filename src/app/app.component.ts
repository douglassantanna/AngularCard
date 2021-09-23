import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Referencias } from './referencia';
import { ReferenciaFormularioComponent } from './referencia-formulario/referencia-formulario.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(public dialog: MatDialog) { }
  openDialog() {
    const dialogRef = this.dialog.open(ReferenciaFormularioComponent);

    dialogRef.afterClosed().subscribe(result => {
      this.referencias.push(result);
    });
  }
  
  referencias: Referencias[] =
  [
    {
      "titulo": "Michele brito - Angular 9",
    "link": "https://www.youtube.com/watch?v=5vPaoV9SV5U&list=PL8iIphQOyG-DSLV6qWs8wh37o0R_F9Q_Q&index=1",
    "tag": "angular",
    "preview": {
      "titulo": "Curso Angular 9 #01 Introdução",
      "description": "Quer ficar por dentro dos tutoriais e dicas que posto diariamente no meu Instagram sobre arquitetura e programação? https://www.instagram.com/brito_michelli Quer participar do meu canal no Telegram? https://t.me/michellibritojava Github Back-end (API): https://github.com/MichelliBrito/agendalive Github Front-end: https://github.com/MichelliBrito/agendalive-app Angular: https://angular.io/ Contatos: Linkedin: https://www.linkedin.com/in/michellibrito/",
      "image": "https://i.ytimg.com/vi/5vPaoV9SV5U/sddefault.jpg",
      "url": "https://www.youtube.com/watch?v=5vPaoV9SV5U"
      }
    },
    {
      "titulo": "Balta.io - Api 15 minutos",
    "link": "https://www.youtube.com/watch?v=but7jqjopKM",
    "tag": "c#",
    "preview": {
      "titulo": "Criando uma API com ASP.NET Core 3 e EF Core 3 em menos de 15 minutos | por André Baltieri #baltaio",
      "description": "Artigo: ASP.NET Core Dependency Injection https://balta.io/blog/aspnet-core-dependency-injection -- Já conhece meus cursos? https://balta.io/cursos Faça parte do meu grupo no Telegram https://t.me/joinchat/Br6vhREL6QIZd3keQZJFXA",
      "image": "https://i.ytimg.com/vi/but7jqjopKM/maxresdefault.jpg",
      "url": "https://www.youtube.com/watch?v=but7jqjopKM"
      }
    },
    {
      "titulo": "Lucas - Angular Deploy",
    "link": "https://dev.to/silverio27/implantar-um-aplicativo-angular-no-azure-pelo-github-actions-3a4f",
    "tag": "angular",
    "preview": {
      "titulo": "Implantar um aplicativo Angular no Azure pelo Github Actions",
      "description": "Oi Pessoal! Nesse post vou mostrar como implantar um aplicativo angular no azure pelo...",
      "image": "https://res.cloudinary.com/practicaldev/image/fetch/s--74fauu9N--/c_imagga_scale,f_auto,fl_progressive,h_500,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/nb7jdv4ld5rl778ku79h.png",
      "url": "https://dev.to/silverio27/implantar-um-aplicativo-angular-no-azure-pelo-github-actions-3a4f"
      }
    }
  ]
  
}
