import { Component } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {
  value: number = 0;

  constructor() { }
  
  clicked (): void  {
    const valor:any = localStorage.getItem('Valor');
    const parcela:any = localStorage.getItem('Parcelas');
    const calculo = Math.round(((valor * parcela) * 1.05))
    this.value = calculo;    
  }

 
}
