import { Component, OnInit } from '@angular/core';
import { TileService } from '../services/tile.service';
import { TileItem } from '../app/tile-item';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <div class="left-rail">
        <tile-group [tiles]="leftTiles" groupTitle="Left Col"></tile-group>
      </div>
      <div class="right-rail">
        <tile-group [tiles]="rightTiles" groupTitle="Right Col"></tile-group>
      </div>
    </div>
  `,
})
export class AppComponent implements OnInit {
  leftTiles: TileItem[];
  rightTiles: TileItem[];

  constructor(private tileService: TileService) {}

  ngOnInit() {
    this.leftTiles = this.tileService.getTileByLayout('left-rail');
    this.rightTiles = this.tileService.getTileByLayout('right-rail');
  }
}
