import { Injectable } from '@angular/core';
import { Cliente } from './cadastro/cliente';


@Injectable({
  providedIn: 'root'
})
// O service contem a camada logica da aplicação. O componente.ts faz a logica apenas da tela como
// de capturar os valores dos campos, de definir quais são os campos do formulario, etc... Mas quem faz toda a parte logica como 
// chamar uma api, cadastrar no local storage, é a camada de serviço. 
export class ClienteService {

  //Variavel static para poder acessar de todos os lugares da service e 
  // _CLIENTES é a variavel que vai ser acessada do browser
  static REPO_CLIENTES = "_CLIENTES";

  constructor() { }

  salvar(cliente:Cliente){
    const storage = this.obterStorage();
    storage.push(cliente);

    localStorage.setItem(ClienteService.REPO_CLIENTES, JSON.stringify(storage));
  }


  //Função que retorna um array de clientes
  obterStorage() : Cliente[] {
    const repositorioClientes = localStorage.getItem(ClienteService.REPO_CLIENTES);
    if(repositorioClientes){
      const clientes: Cliente[] = JSON.parse(repositorioClientes);
      return clientes;
    }

    const clientes: Cliente[] = [];
    localStorage.setItem(ClienteService.REPO_CLIENTES, JSON.stringify(clientes));
    return clientes;
  }
}
