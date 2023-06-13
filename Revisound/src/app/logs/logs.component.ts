import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../service/api.service';
import { IRESTLogs, IResLogin } from '../Interfaces/interfaces';
import { Subject } from 'rxjs';
import { DataTableDirective } from 'angular-datatables';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.scss']
})
export class LogsComponent implements OnInit{

  logs: IRESTLogs[] = [];

  @ViewChild(DataTableDirective, {static: false})
  dtElement!: DataTableDirective;

  constructor(private apiService: ApiService){ }
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<DataTables.Settings> = new Subject<DataTables.Settings>();

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
    };
    this.apiService.getLogs().subscribe((data: any) => {
      this.logs = data;
      this.dtTrigger.next(this.dtOptions);
    });
  }

rerender(): void {
  this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
    dtInstance.destroy();
    this.dtTrigger.next(this.dtOptions);
    });
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }
}
