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
  
  clicked () {
    const Valor = (localStorage.getItem('Valor'))?.toString();
    const Parcelas = (localStorage.getItem('Parcelas'))?.toString();
    const Conta = {
      Valor,
      Parcelas
    }
    
    this.cadastroService.post(Conta).subscribe( res => {
      const valor = res.toFixed(2)
      this.value = valor.replace('.', ',');
    }, err => {
      console.log(err);
    })  
  } 

  onChange (event: any) {
    const valor = parseFloat(event.target.value)
    const fixed = valor.toFixed(2)
    localStorage.setItem('Valor', fixed)  
  }
}
