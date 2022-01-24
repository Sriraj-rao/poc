import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { employeModel } from './models/table.model';

@Injectable({
  providedIn: 'root'
})
export class TableDataService {

  constructor(private http:HttpClient) { }

  signup(data:any)
  {
    return this.http.post<any>("http://localhost:3000/signupUsers",data).pipe(map((res:any)=>
    {
      return res;
    }))
  }

  postData(data:any)
  {
    return this.http.post<any>("http://localhost:3000/posts",data).pipe(map((res:any)=>
    {
      return res;
    }))
  }

  updateData(data:any,id:number)
  {
    return this.http.put<any>("http://localhost:3000/posts/"+id,data).pipe(map((res:any)=>
    {
      return res;
    }))
  }

  deleteData(id:number)
  {
    return this.http.delete<any>("http://localhost:3000/posts/"+id).pipe(map((res:any)=>
    {
      return res;
    }))
  }

  getData()
  {
    return this.http.get<any>("http://localhost:3000/posts").pipe(map((res:any)=>
    {
      return res;
    }))
  }

  getLoginData()
  {
    return this.http.get<any>("http://localhost:3000/signupUsers").pipe(map((res:any)=>
    {
      return res;
    }))
  }

  
}
