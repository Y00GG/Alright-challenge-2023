import { Component } from '@angular/core';

@Component({
  selector: 'app-reviewer-documents',
  templateUrl: './reviewer-documents.component.html',
  styleUrls: ['./reviewer-documents.component.scss']
})
export class ReviewerDocumentsComponent {
  documentCurrent: any = {};

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
