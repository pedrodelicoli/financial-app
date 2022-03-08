import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  value: number = 0;

  clicked (): void  {
    const valor:any = localStorage.getItem('Valor');
    const parcela:any = localStorage.getItem('Parcelas');
    const calculo = Math.round(((valor * parcela) * 1.05))
    this.value = calculo;    
  }
}
