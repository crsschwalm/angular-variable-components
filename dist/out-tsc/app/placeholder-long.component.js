import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
let PlaceholderLongComponent = class PlaceholderLongComponent {
};
__decorate([
    Input()
], PlaceholderLongComponent.prototype, "data", void 0);
PlaceholderLongComponent = __decorate([
    Component({
        template: `
    <div class="job-ad">
      <h4>{{ data.headline }}</h4>

      {{ data.body }}
    </div>
  `,
    })
], PlaceholderLongComponent);
export { PlaceholderLongComponent };
/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
//# sourceMappingURL=placeholder-long.component.js.map