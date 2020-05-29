import { Component, Input } from '@angular/core';
import { TileComponent } from './tile.component';

@Component({
  template: `
    <div class="placeholder-long">
      <h3>{{ data.headline }}</h3>
      {{ data.body }}
    </div>
  `,
})
export class PlaceholderLongComponent implements TileComponent {
  @Input() data: any;
}
