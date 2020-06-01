import { Injectable } from '@angular/core';
import * as componentsLibrary from '../components';
import { TileItem } from '../app/tile-item';
import landingPageConfig from '../assets/landing-page-options.json';

@Injectable()
export class TileService {
  getTileByLayout(layoutName: 'right-rail' | 'left-rail') {
    return landingPageConfig[layoutName].map(
      (component) =>
        new TileItem(componentsLibrary[component.type], component.props),
    );
  }
}
