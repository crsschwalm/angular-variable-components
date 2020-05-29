import { __decorate } from "tslib";
import { Component } from '@angular/core';
let AppComponent = class AppComponent {
    constructor(tileService) {
        this.tileService = tileService;
    }
    ngOnInit() {
        this.tiles = this.tileService.getTiles();
    }
};
AppComponent = __decorate([
    Component({
        selector: 'app-root',
        template: `
    <div>
      <app-tile-banner [tiles]="tiles"></app-tile-banner>
    </div>
  `,
    })
], AppComponent);
export { AppComponent };
/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
//# sourceMappingURL=app.component.js.map