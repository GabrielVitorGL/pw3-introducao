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
}
