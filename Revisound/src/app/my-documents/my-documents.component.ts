import { Component } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-my-documents',
  templateUrl: './my-documents.component.html',
  styleUrls: ['./my-documents.component.scss']
})

export class MyDocumentsComponent {

  rol = " ";

  constructor( private apiService: ApiService ) {
    this.rol = this.apiService.getUser()?.rol || " ";
  }

}
