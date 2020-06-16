import { Component, Input, ViewChild } from '@angular/core';
import { TileDirective } from '../app/tile.directive';
import { TileItem } from '../app/tile-item';

@Component({
  selector: 'left-rail',
  template: `
    <div class="row left-rail">
      <ng-template ngFor let-tile [ngForOf]="tiles" let-index="index">
        <div class="col-sm-12">
          <dynamic-component [props]="tile"></dynamic-component>
        </div>
      </ng-template>
    </div>
  `,
})
export class LeftRailComponent {
  @Input() tiles: TileItem[];
  @Input() groupTitle: string;
  @Input() groupID: string;
  @ViewChild(TileDirective, { static: true }) tileHost: TileDirective;
}
