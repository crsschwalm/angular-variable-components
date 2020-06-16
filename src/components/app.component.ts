import { Component, OnInit } from '@angular/core';
import { TileService } from '../services/tile.service';
import { TileItem } from '../app/tile-item';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <div class="row">
        <div class="col-lg-9 col-md-12 col-sm-12">
          <left-rail
            [tiles]="leftTiles"
            groupTitle="Left Col"
            groupID="left-rail"
          ></left-rail>
        </div>
        <div class="col-lg-3 col-md-12 col-sm-12">
          <right-rail
            [tiles]="rightTiles"
            groupTitle="Right Col"
            groupID="right-rail"
          ></right-rail>
        </div>
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
