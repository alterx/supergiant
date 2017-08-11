import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CloudAccountsService {
    newModal = new Subject<any>();
    newEditModal = new Subject<any>();
    cloudAccounts: any;
    selectedItems= new Array();

    constructor() {}

    // return all selected cloud accounts
    returnSelected(){
      return this.selectedItems
    }

    // Record/Delete a cloud account selection from the "selected items" array.
    selectItem(val,event){
     if (event) {
       this.selectedItems.push(val);
     } else {
       var index = this.selectedItems.indexOf(val);
         if (index > -1) {
          this.selectedItems.splice(index, 1);
         }
     }
   }
}
