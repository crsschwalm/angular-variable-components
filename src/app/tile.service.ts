import { Injectable } from '@angular/core';

import { PlaceholderLongComponent } from './placeholder-long.component';
import { PlaceholderShortComponent } from './placeholder-short.component';
import { TileItem } from './tile-item';

@Injectable()
export class TileService {
  getTiles() {
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
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
