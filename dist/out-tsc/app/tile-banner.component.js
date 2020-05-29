import { __decorate } from "tslib";
import { Component, Input, ViewChild, } from '@angular/core';
import { TileDirective } from './tile.directive';
let TileBannerComponent = class TileBannerComponent {
    constructor(componentFactoryResolver) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.currentTileIndex = -1;
    }
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
        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(tileItem.component);
        const viewContainerRef = this.tileHost.viewContainerRef;
        viewContainerRef.clear();
        const componentRef = viewContainerRef.createComponent(componentFactory);
        componentRef.instance.data = tileItem.data;
    }
    getTiles() {
        this.interval = setInterval(() => {
            this.loadComponent();
        }, 3000);
    }
};
__decorate([
    Input()
], TileBannerComponent.prototype, "tiles", void 0);
__decorate([
    ViewChild(TileDirective, { static: true })
], TileBannerComponent.prototype, "tileHost", void 0);
TileBannerComponent = __decorate([
    Component({
        selector: 'app-tile-banner',
        template: `
    <div class="tile-banner-example">
      <h3>Advertisements</h3>
      <ng-template tile-host></ng-template>
    </div>
  `,
    })
], TileBannerComponent);
export { TileBannerComponent };
/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
//# sourceMappingURL=tile-banner.component.js.map