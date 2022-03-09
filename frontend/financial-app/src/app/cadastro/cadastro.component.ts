import { Component } from '@angular/core';
import { CadastroService } from './cadastro.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {
  value: number = 0;

  constructor(private cadastroService: CadastroService) { }
  
  clicked (): void  {
    const valor:any = localStorage.getItem('Valor');
    const parcela:any = localStorage.getItem('Parcelas');
    this.cadastroService.post(valor, parcela).subscribe( res => {
      this.value = res;
    }, err => {
      console.log(err);
    })  
  } 
}
