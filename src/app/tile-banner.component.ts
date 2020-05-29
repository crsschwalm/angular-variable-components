import {
  Component,
  Input,
  OnInit,
  ViewChild,
  ComponentFactoryResolver,
  OnDestroy,
} from '@angular/core';
import { TileDirective } from './tile.directive';
import { TileItem } from './tile-item';
import { TileComponent } from './tile.component';

@Component({
  selector: 'app-tile-banner',
  template: `
    <div class="tile-banner-example">
      <h3>Advertisements</h3>
      <ng-template tile-host></ng-template>
    </div>
  `,
})
export class TileBannerComponent implements OnInit, OnDestroy {
  @Input() tiles: TileItem[];
  currentTileIndex = -1;
  @ViewChild(TileDirective, { static: true }) tileHost: TileDirective;
  interval: any;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  ngOnInit() {
    this.loadComponent();
    this.getTiles();
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  loadComponent() {
    this.currentTileIndex = (this.currentTileIndex + 1) % this.tiles.length;
    const tileItem = this.tiles[this.currentTileIndex];

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
      tileItem.component,
    );

    const viewContainerRef = this.tileHost.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent(componentFactory);
    (<TileComponent>componentRef.instance).data = tileItem.data;
  }

  getTiles() {
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
