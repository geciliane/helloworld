import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-diretiva',
  templateUrl: './diretiva.component.html',
  styleUrls: ['./diretiva.component.scss']
})
export class DiretivaComponent implements OnInit {

  mostrarNota = true;
  @Input() aluno;
  @Output() notaSelecionada = new EventEmitter();

  constructor() { }

  ngOnInit() { }

  selecionarNota(nota) {
    console.log("Nota selecionada ", nota)
    this.notaSelecionada.emit(nota);
  }

}