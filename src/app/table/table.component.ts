import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { TableDataService } from '../table-data.service';
import { MatPaginator } from '@angular/material/paginator';
import { employeModel } from '../models/table.model';
import { AddEditEmployeeComponent } from '../modals/add-edit-employee/add-edit-employee.component';
import { DetailsSharingService } from '../details-sharing.service';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  // @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  public displayedColumns = [
    'id',
    'firstName',
    'lastName',
    'email',
    'mobile',
    'salary',
    'actions'
  
];

dataSource: MatTableDataSource<any>;

responseData:any;




  constructor( private httpService: TableDataService ,   public dialog: MatDialog, private detailsSharing: DetailsSharingService
    ) { 
      this.detailsSharing.reloadTable.subscribe(response => {
        if (response) {
          this.getAllUsers();
        }
      });
      
    }



  ngOnInit(): void {
    this.getAllUsers();

  }
  ngAfterViewInit() {
    if (this.dataSource) {
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    }
  }

  filterData(event:any)
  {
    this.dataSource.filter = event.target.value;
  }
  deleteEmployee(row:any)
  {
    console.log(row);
    this.httpService.deleteData(row.id).subscribe(res=>
      {
        alert("record deleted successfully");
        this.detailsSharing.reloadTable.next(true);
      })
  }
  addEmployee() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.id = 'app-add-edit-employee';
    this.dialog.open(AddEditEmployeeComponent, dialogConfig);
  
}

editEmployee(row:any)
{
  const dialogConfig = new MatDialogConfig();
    dialogConfig.id = 'app-add-edit-employee';
    dialogConfig.data = {
      employeeData: row,
    
    };
    this.dialog.open(AddEditEmployeeComponent, dialogConfig);
}
  getAllUsers()
  {
    this.httpService.getData().subscribe(data =>
      {
        console.log(data)
        this.responseData = data;
        this.dataSource = new MatTableDataSource(this.responseData);
           this.dataSource.sort = this.sort;
           this.dataSource.paginator = this.paginator;
      })
  }


}
