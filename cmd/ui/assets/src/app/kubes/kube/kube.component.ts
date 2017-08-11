import { Component, Input} from '@angular/core';
import { KubesService } from '../kubes.service';

@Component({
  selector: '[app-kube]',
  templateUrl: './kube.component.html',
  styleUrls: ['./kube.component.css']
})
export class KubeComponent {
  @Input() kube: any;
  constructor(private kubesService: KubesService) { }
}
