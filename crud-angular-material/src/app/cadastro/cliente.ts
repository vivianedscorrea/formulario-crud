import { v4 as uuid } from 'uuid'

// Essa classe representa um cliente com seus dados
export class Cliente {
    id?: string;
    nome?: string;
    cpf?: string;
    datatNascimento?: string;
    email?: string;

    //Esse metodo serve para criar um cliente vazio
    static newCliente() {
        const cliente = new Cliente();
        // Essa função vai gerar o id unico para esse cliente. Então cada vez que a função
        //newCliente for criada, vai vir com id 
        cliente.id = uuid();
        return cliente;

    }
}