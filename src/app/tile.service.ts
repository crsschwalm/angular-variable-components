import { Injectable } from '@angular/core';

import { PlaceholderLongComponent } from './placeholder-long.component';
import { PlaceholderShortComponent } from './placeholder-short.component';
import { TileItem } from './tile-item';
import landingPageConfig from '../assets/landing-page-options.json';

@Injectable()
export class TileService {
  getTiles() {
    const AvailableComponents = {
      PlaceholderLongComponent,
      PlaceholderShortComponent,
    };
    return landingPageConfig['left-rail'].map(
      (component) =>
        new TileItem(AvailableComponents[component.type], component.props),
    );
  }
}
