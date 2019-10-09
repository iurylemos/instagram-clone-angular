import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Imagem } from './imagem.model';


@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
  animations: [
    trigger('banner',[
      state('escondido', style({
        opacity: 0
      })),
      state('visivel', style({
        opacity: 1
      })),
      transition('escondido <=> visivel', animate('1s ease-in'))
    ])
  ]
})
export class BannerComponent implements OnInit {
  

  public estado: string = 'visivel'
  public imagens: Imagem[] = [
    { estado: 'visivel', url: '../../../assets/banner-acesso/imagens/img_1.png' },
    { estado: 'escondido', url: '../../../assets/banner-acesso/imagens/img_2.png' },
    { estado: 'escondido', url: '../../../assets/banner-acesso/imagens/img_3.png' },
    { estado: 'escondido', url: '../../../assets/banner-acesso/imagens/img_4.png' },
    { estado: 'escondido', url: '../../../assets/banner-acesso/imagens/img_5.png' }
  ]

  constructor() { }

  ngOnInit() {
    // console.log(this.imagens)
    setTimeout(() => {
      this.logicaRotacao()
    }, 3000);
  }

  // public toogleEstadoAnimacao() : void {
  //   //Recuperar o estado e atribuir a ele o visivel ou escondido
  //   //Dependendo do valor atual
  //   //Se estiver visivel vai ficar escondido, e se tiver escondido, vai ficar visivel
  //   this.estado = this.estado === 'visivel' ? 'escondido' : 'visivel'
  // }

  public logicaRotacao() : void {
    // console.log(this.imagens)

    //auxilia na exibição da imagem seguinte
    let idx: number

    //ocultar imagem
    for(let i: number = 0; i <= 4; i++) {
      //Verificar se dentro do array de imagens no indice i
      //Se o valor contido lá dentro, ou seja o atributo estado do indice
      //Se esse estado é igual a visivel
      if(this.imagens[i].estado === 'visivel') {
        //E vou afetar ele para escondido
        this.imagens[i].estado = 'escondido'

        //Verificando se i é igual a quatro, para que ele não extrapole
        //Se o i chegar a quatro vou atribuir o zero, se não atribuo mais um.
        idx = i === 4 ? 0 : i + 1 

        break
      }
    }

    //após ocultar, vou exibir a próxima imagem
    //idx representa a imagem seguinte
    this.imagens[idx].estado = 'visivel'


    //Vou realizar uma lógica recursiva
    setTimeout(() => {
      this.logicaRotacao()
    }, 3000);

  }

}
