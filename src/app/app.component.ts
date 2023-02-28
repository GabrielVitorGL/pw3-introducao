import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pw3-introducao';

  obterAutor(){
      return "É O IGOR GUIMARÃAESS";
  }
  nome = 'Gabriel'
  sobrenome = 'Jefferson'
  idade = 191


  nomeCompleto(){
    return this.nome + ' '+  this.sobrenome
  }
  logo = "favicon.ico"
  logito = "assets/manuelmito.jpg"


  ocultar=true;

  obterAlerta(){
      alert("VC PREFERE A PEPÈM OU A NENÉM!?!?!?");
  }

  obterTexto(){
    this.ocultar = !this.ocultar;
  }
}
