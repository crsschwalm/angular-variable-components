import { Component, Input } from '@angular/core';
import { TileComponent } from './tile.component';

@Component({
  template: `
    <div class="job-ad">
      <h4>{{ data.headline }}</h4>

      {{ data.body }}
    </div>
  `,
})
export class PlaceholderLongComponent implements TileComponent {
  @Input() data: any;
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
