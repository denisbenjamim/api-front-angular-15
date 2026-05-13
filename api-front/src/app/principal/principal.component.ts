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
  tabela:boolean = true;
  clientes:Cliente[] = [];

  constructor(private servico:ClienteService){}

  selecionar():void{
    this.servico.selecionar().subscribe(retorno => this.clientes = retorno)
  }

  cadastrar(): void{
    this.servico.cadastrar(this.cliente)
    .subscribe( retorno => {
      this.clientes.push(retorno);

      this.limparFormulario();

      alert('Cliente cadastrado com sucesso"')
    });
  }

  alterar():void{
    this.servico.alterar(this.cliente).subscribe(
      retorno => {
        const posicao = this.clientes.findIndex(c => c.id === retorno.id);

        this.clientes[posicao] = retorno;
        this.reset();
        alert('Cliente alterado com sucesso!')
      }
    )
  }

  selecionarCliente(posicao:number):void{
    this.cliente = this.clientes[posicao];
    this.btnCadastro = false;
    this.tabela = false;
  }

  remover():void{
     this.servico.remover(this.cliente.id).subscribe(
      () => {
        const posicao = this.clientes.findIndex(c => c.id === this.cliente.id);

        this.clientes.slice(posicao,1)
        this.reset();
        alert('Cliente removido com sucesso!')
      }
    )
  }

  cancelar(){
    this.reset();
  }

  private reset(){
    this.btnCadastro = true;
    this.tabela = true;
    this.limparFormulario();
  }

  private limparFormulario(){
    this.cliente = new Cliente();
  }

  ngOnInit(){
    this.selecionar()
  }
}
