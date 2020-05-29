import { Component, OnInit } from '@angular/core';

import { TileService } from './tile.service';
import { TileItem } from './tile-item';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <app-tile-banner [tiles]="tiles"></app-tile-banner>
    </div>
  `,
})
export class AppComponent implements OnInit {
  tiles: TileItem[];

  constructor(private tileService: TileService) {}

  ngOnInit() {
    this.tiles = this.tileService.getTiles();
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
