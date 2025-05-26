import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input'
import { FlexLayoutModule } from '@angular/flex-layout'
import { MatCardModule } from '@angular/material/card'
import { MatIconModule } from '@angular/material/icon'
import {FormsModule } from '@angular/forms'
import { MatTableModule } from '@angular/material/table'
import { MatButtonModule } from '@angular/material/button'

@Component({
  selector: 'app-consulta',
  imports: [ MatInputModule, MatIconModule, MatCardModule, MatTableModule, FormsModule, FlexLayoutModule, MatButtonModule ],
  templateUrl: './consulta.component.html',
  styleUrl: './consulta.component.scss'
})
export class ConsultaComponent {

}
