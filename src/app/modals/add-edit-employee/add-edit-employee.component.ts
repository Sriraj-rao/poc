import { ThrowStmt } from '@angular/compiler';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DetailsSharingService } from 'src/app/details-sharing.service';
import { employeModel } from 'src/app/models/table.model';
import { TableDataService } from 'src/app/table-data.service';

@Component({
  selector: 'app-add-edit-employee',
  templateUrl: './add-edit-employee.component.html',
  styleUrls: ['./add-edit-employee.component.scss']
})
export class AddEditEmployeeComponent implements OnInit {

  constructor(private formBuilder:FormBuilder, private detailsSharing: DetailsSharingService,public dialogRef: MatDialogRef<AddEditEmployeeComponent>,
    public tableSrvc:TableDataService ,  @Inject(MAT_DIALOG_DATA) public data: any,) { 

    }
    editForm:boolean =false;
  addForm: FormGroup
employeeModelObj:employeModel;
  ngOnInit(): void {  
    this.initializeForm();
    this.checkAddOrEdit();

    console.log(this.data);
  }

  initializeForm()
  {
    this.addForm = this.formBuilder.group(
      {
        firstName:[''],
        lastName:[''],
        email:[''],
        mobile:[''],
        salary:[''],
      }
    )
 
  }

  setTheForm()
  {
    this.addForm.controls['firstName'].setValue(this.data.employeeData.firstName);
    this.addForm.controls['lastName'].setValue(this.data.employeeData.lastName);
    this.addForm.controls['email'].setValue(this.data.employeeData.email);
    this.addForm.controls['mobile'].setValue(this.data.employeeData.mobile);
    this.addForm.controls['salary'].setValue(this.data.employeeData.salary);
  }

  checkAddOrEdit()
  {
    if(this.data !== null)
    {
      this.editForm = true;
      this.setTheForm();
    }
    else{
      this.editForm = false;
      this.initializeForm();
    }
  }
  onClose()
  {
    this.dialogRef.close();
  }

  addEmployee()
  {
    this.employeeModelObj = this.addForm.value;
    this.tableSrvc.postData( this.employeeModelObj).subscribe(res=>
      {
        console.log(res);
        alert("Employee added successfully");
        this.dialogRef.close();
        this.detailsSharing.reloadTable.next(true);
      })
  }

  updateEmployee()
  {
    this.employeeModelObj = this.addForm.value;
    const id = this.data.employeeData.id;
    this.tableSrvc.updateData( this.employeeModelObj,id).subscribe(res=>
      {
        console.log(res);
        alert("Employee updated successfully");
        this.dialogRef.close();
        this.detailsSharing.reloadTable.next(true);
      })
  }
}
