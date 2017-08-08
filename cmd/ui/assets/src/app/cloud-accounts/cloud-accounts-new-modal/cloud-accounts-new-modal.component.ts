import { Component, AfterViewInit, OnDestroy,ViewChild, ElementRef } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs/Subscription';
import { CloudAccountsService } from '../cloud-accounts.service';

@Component({
  selector: 'app-cloud-accounts-new-modal',
  templateUrl: './cloud-accounts-new-modal.component.html',
  styleUrls: ['./cloud-accounts-new-modal.component.css']
})
export class CloudAccountsNewModalComponent implements AfterViewInit, OnDestroy{
   private subscription: Subscription;
   @ViewChild('newCloudAccountModal') content: ElementRef;
   modalRef: any;

   constructor(private modalService: NgbModal, private cloudAccountsService: CloudAccountsService) {}

   ngAfterViewInit() {
     this.subscription = this.cloudAccountsService.newModal.subscribe( message => {if (message) {this.open(this.content)};});
   }

   ngOnDestroy(){
     this.subscription.unsubscribe();
   }

   open(content) {
     this.modalRef = this.modalService.open(content);
   }

   sendOpen(message){
     this.modalRef.close();
     this.cloudAccountsService.openNewCloudServiceEditModal(message);

   }

   private getDismissReason(reason: any): string {
     if (reason === ModalDismissReasons.ESC) {
       return 'by pressing ESC';
     } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
       return 'by clicking on a backdrop';
     } else {
       return  `with: ${reason}`;
     }
   }

}