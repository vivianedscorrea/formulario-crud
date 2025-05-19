import { Component } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input'
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Cliente } from './cliente';
import { ClienteService } from '../cliente.service';


@Component({
  selector: 'app-cadastro',
  imports: [ FlexLayoutModule, MatCardModule, FormsModule, MatFormFieldModule, MatInputModule, MatIconModule, MatButtonModule ],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.scss'
})
export class CadastroComponent {

  //Criei um novo cliente do tipo Cliente atraves do metodo newCliente()
  cliente: Cliente = Cliente.newCliente();

  //Injetando uma estacia de ClienteService
  constructor(private service: ClienteService){

  }

  salvar(){
    this.service.salvar(this.cliente)
  }

}
