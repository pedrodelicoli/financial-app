import { Component, OnInit } from '@angular/core';
import { ConsultaService } from './consulta.service';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})
export class ConsultaComponent implements OnInit {
  name: string = '';

  constructor(private consultaService: ConsultaService) { }

  ngOnInit(): void {
  }

  clicked () {
    const numero:any = localStorage.getItem('Numero');
    this.consultaService.get(numero).subscribe( res => {
      this.name = res.value;
    }, err => {
      console.log(err.message);
    })  
  } 

}
