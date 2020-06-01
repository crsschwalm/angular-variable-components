import { Component, Input } from '@angular/core';
import { TileComponent } from '../app/tile.type';

@Component({
  template: `
    <div class="placeholder-short">
      <h3>{{ data.name }}</h3>
      <p>{{ data.bio }}</p>
    </div>
  `,
})
export class PlaceholderShortComponent implements TileComponent {
  @Input() data: any;
}
