import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TileDirective } from './tile.directive';
import { TileService } from '../services/tile.service';
import { AppComponent } from '../components/app.component';
import { PlaceholderShortComponent } from '../components/placeholder-short.component';
import { PlaceholderLongComponent } from '../components/placeholder-long.component';
import { LeftRailComponent } from '../components/left-rail.component';
import { DynamicComponent } from '../components/dynamic-component.component';
import { RightRailComponent } from '../components/right-rail.component';

@NgModule({
  imports: [BrowserModule],
  providers: [TileService],
  declarations: [
    AppComponent,
    LeftRailComponent,
    RightRailComponent,
    PlaceholderShortComponent,
    PlaceholderLongComponent,
    TileDirective,
    DynamicComponent,
  ],
  entryComponents: [PlaceholderLongComponent, PlaceholderShortComponent],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {}
}
