import {
  Component,
  Input,
  OnInit,
  ViewChild,
  ComponentFactoryResolver,
  OnDestroy
} from "@angular/core";
import { TileDirective } from "./tile.directive";
import { TileItem } from "./tile-item";
import { TileComponent } from "./tile.component";

@Component({
  selector: "app-tile-banner",
  template: `
    <div class="tile-banner-example">
      <h3>Advertisements</h3>
      <ng-template tile-host></ng-template>
    </div>
  `
})
export class AdBannerComponent implements OnInit, OnDestroy {
  @Input() ads: TileItem[];
  currentAdIndex = -1;
  @ViewChild(TileDirective, { static: true }) adHost: TileDirective;
  interval: any;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  ngOnInit() {
    this.loadComponent();
    this.getAds();
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  loadComponent() {
    this.currentAdIndex = (this.currentAdIndex + 1) % this.ads.length;
    const adItem = this.ads[this.currentAdIndex];

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
      adItem.component
    );

    const viewContainerRef = this.adHost.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent(componentFactory);
    (<AdComponent>componentRef.instance).data = adItem.data;
  }

  getAds() {
    this.interval = setInterval(() => {
      this.loadComponent();
    }, 3000);
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
