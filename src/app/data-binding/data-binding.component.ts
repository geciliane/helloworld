import { Component, OnInit } from '@angular/core';
import { TargetLocator } from 'selenium-webdriver';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit {

  private urlImagem = 'https://i.ytimg.com/vi/i_FbQzQQQLI/maxresdefault.jpg';
  private texto;
  
  private nome = 'rafael';

  constructor() { }

  ngOnInit() {
  }
  getValor(): number {
    return 1;
  }

  botaoBinding() {
    alert('botao clicado');
  }

  onKeyUp(evento): void {
    console.log(evento.target.value);
    this.texto = evento.target.value;
  }
  
}
