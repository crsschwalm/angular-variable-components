import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { PlaceholderLongComponent } from './placeholder-long.component';
import { PlaceholderShortComponent } from './placeholder-short.component';
import { TileItem } from './tile-item';
import landingPageConfig from '../assets/landing-page-options.json';
let TileService = class TileService {
    getTiles() {
        landingPageConfig['left-rail'];
        return [
            new TileItem(PlaceholderShortComponent, {
                name: 'Bombasto',
                bio: 'Brave as they come',
            }),
            new TileItem(PlaceholderShortComponent, {
                name: 'Dr IQ',
                bio: 'Smart as they come',
            }),
            new TileItem(PlaceholderLongComponent, {
                headline: 'Hiring for several positions',
                body: 'Submit your resume today!',
            }),
            new TileItem(PlaceholderLongComponent, {
                headline: 'Openings in all departments',
                body: 'Apply today',
            }),
        ];
    }
};
TileService = __decorate([
    Injectable()
], TileService);
export { TileService };
/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
//# sourceMappingURL=tile.service.js.map