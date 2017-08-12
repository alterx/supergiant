import { Component, OnDestroy, OnInit } from '@angular/core';
import { PodsService } from './pods.service';
import { Subscription } from 'rxjs/Subscription';
import { Supergiant } from '../shared/supergiant/supergiant.service'
import { Notifications } from '../shared/notifications/notifications.service'
import { Observable } from 'rxjs/Rx';


@Component({
  selector: 'app-pods',
  templateUrl: './pods.component.html',
  styleUrls: ['./pods.component.css']
})
export class PodsComponent implements OnInit {
  private pods = [];
  private subscription: Subscription;

  constructor(
    private podsService: PodsService,
    private supergiant: Supergiant,
    private notifications: Notifications,
  ) { }

  //get accouts when page loads
  ngOnInit() {
    this.getAccounts()
  }
  //get accounts
  getAccounts() {
    this.subscription = Observable.timer(0, 5000)
    .switchMap(() => this.supergiant.KubeResources.get()).subscribe(
      (pods) => {this.pods = pods.items.filter( resource => resource.kind === "Pod")},
      (err) => { this.notifications.display("warn", "Connection Issue.", err)});
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
