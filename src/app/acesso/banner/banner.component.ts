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
    { estado: 'escondido', url: '../../../assets/banner-acesso/imagens/img_1.png' },
    { estado: 'escondido', url: '../../../assets/banner-acesso/imagens/img_2.png' },
    { estado: 'visivel', url: '../../../assets/banner-acesso/imagens/img_3.png' },
    { estado: 'escondido', url: '../../../assets/banner-acesso/imagens/img_4.png' },
    { estado: 'escondido', url: '../../../assets/banner-acesso/imagens/img_5.png' }
  ]

  constructor() { }

  ngOnInit() {
    console.log(this.imagens)
  }

  public toogleEstadoAnimacao() : void {
    //Recuperar o estado e atribuir a ele o visivel ou escondido
    //Dependendo do valor atual
    //Se estiver visivel vai ficar escondido, e se tiver escondido, vai ficar visivel
    this.estado = this.estado === 'visivel' ? 'escondido' : 'visivel'
  }

}
