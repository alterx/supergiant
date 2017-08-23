import { Component, Input } from '@angular/core';
import { AppsService } from '../apps.service';

@Component({
  selector: '[app-deployment]',
  templateUrl: './deployment.component.html',
  styleUrls: ['./deployment.component.css']
})
export class DeploymentComponent {
  @Input() deployment: any;
  constructor(private appsService: AppsService) { }
  status(deployment) {
    if (deployment.status && deployment.status.error && deployment.status.retries === deployment.status.max_retries) {
      return 'status status-danger';
    } else if (deployment.status) {
      return 'status status-transitioning';
    } else if (deployment.passive_status && !deployment.passive_status_okay) {
      return 'status status-warning';
    } else {
      return 'status status-ok';
    }
  }
}
