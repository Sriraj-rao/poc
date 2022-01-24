import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DetailsSharingService {
  public reloadTable: Subject<boolean> = new Subject();

  constructor() { }
}
