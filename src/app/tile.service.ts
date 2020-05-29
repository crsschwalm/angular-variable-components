import { Injectable } from '@angular/core';

import { PlaceholderLongComponent } from './placeholder-long.component';
import { PlaceholderShortComponent } from './placeholder-short.component';
import { TileItem } from './tile-item';
import landingPageConfig from '../assets/landing-page-options.json';

@Injectable()
export class TileService {
  //get from component library file
  availableComponents = {
    PlaceholderLongComponent,
    PlaceholderShortComponent,
  };

  getTileByLayout(layoutName: 'right-rail' | 'left-rail') {
    return landingPageConfig[layoutName].map(
      (component) =>
        new TileItem(this.availableComponents[component.type], component.props),
    );
  }
}
