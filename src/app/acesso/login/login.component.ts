import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Output() public exibirPainel: EventEmitter<string> = new EventEmitter<string>()

  constructor() { }

  ngOnInit() {
  }

  public exibirPainelCadastro(): void {
    // console.log('CHEGAMOS Até aqui')
    this.exibirPainel.emit('cadastro')
  }

}
