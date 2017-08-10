import { Component, Input} from '@angular/core';
import { CloudAccountsService } from '../cloud-accounts.service';

@Component({
  selector: '[app-cloud-account]',
  templateUrl: './cloud-account.component.html',
  styleUrls: ['./cloud-account.component.css']
})
export class CloudAccountComponent {
  @Input() cloudAccount: any;
  constructor(private cloudAccountsService: CloudAccountsService) { }
}
