import { __decorate } from "tslib";
import { Component, Input } from "@angular/core";
let PlaceholderShortComponent = class PlaceholderShortComponent {
};
__decorate([
    Input()
], PlaceholderShortComponent.prototype, "data", void 0);
PlaceholderShortComponent = __decorate([
    Component({
        template: `
    <div class="hero-profile">
      <h3>Featured Hero Profile</h3>
      <h4>{{ data.name }}</h4>

      <p>{{ data.bio }}</p>

      <strong>Hire this hero today!</strong>
    </div>
  `
    })
], PlaceholderShortComponent);
export { PlaceholderShortComponent };
/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
//# sourceMappingURL=placeholder-short.component.js.map