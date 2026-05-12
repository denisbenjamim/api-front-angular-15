import { Component } from '@angular/core';
import { Cliente } from '../model/Cliente';
import { ClienteService } from '../servico/cliente.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent {
  cliente = new Cliente();
  btnCadastro:boolean = true;
  clientes:Cliente[] = [];

  constructor(private servico:ClienteService){}

  selecionar():void{
    this.servico.selecionar().subscribe(retorno => this.clientes = retorno)
  }

  ngOnInit(){
    this.selecionar()
  }
}
