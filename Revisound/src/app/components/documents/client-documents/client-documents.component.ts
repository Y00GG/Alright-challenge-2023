import { Component } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-client-documents',
  templateUrl: './client-documents.component.html',
  styleUrls: ['./client-documents.component.scss'],
})
export class ClientDocumentsComponent {
  documentCurrent: any = {};

  constructor(private apiService: ApiService){

  }

  open(document: any) {
    this.documentCurrent = document;
  }

  documents = [
    { id: 1, name: 'Contrato 1', status: 'Aprobado' },
    { id: 2, name: 'Contrato 2', status: 'Pendiente' },
    { id: 3, name: 'Contrato 3', status: 'Rechazado' },
    // ...
  ];

  verDocumento(id: number) {
    // Lógica para ver el documento con la ID especificada
    console.log(`Ver documento con ID ${id}`);
  }

  rechazarDocumento(id: number) {
    // Lógica para rechazar el documento con la ID especificada
    console.log(`Rechazar documento con ID ${id}`);
  }
}
