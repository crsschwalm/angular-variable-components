import { Component, Input, ViewChild } from '@angular/core';
import { TileDirective } from '../app/tile.directive';
import { TileItem } from '../app/tile-item';

@Component({
  selector: 'right-rail',
  template: `
    <div class="row right-rail">
      <ng-template ngFor let-tile [ngForOf]="tiles" let-index="index">
        <div class="col-lg-12 col-md-6 col-sm-12">
          <dynamic-component [props]="tile"></dynamic-component>
        </div>
      </ng-template>
    </div>
  `,
})
export class RightRailComponent {
  @Input() tiles: TileItem[];
  @Input() groupTitle: string;
  @ViewChild(TileDirective, { static: true }) tileHost: TileDirective;
}
