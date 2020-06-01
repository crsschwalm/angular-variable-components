import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TileDirective } from './tile.directive';
import { TileService } from '../services/tile.service';
import { AppComponent } from '../components/app.component';
import { PlaceholderShortComponent } from '../components/placeholder-short.component';
import { PlaceholderLongComponent } from '../components/placeholder-long.component';
import { TileGroupComponent } from '../components/tile-group.component';

@NgModule({
  imports: [BrowserModule],
  providers: [TileService],
  declarations: [
    AppComponent,
    TileGroupComponent,
    PlaceholderShortComponent,
    PlaceholderLongComponent,
    TileDirective,
  ],
  entryComponents: [PlaceholderLongComponent, PlaceholderShortComponent],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {}
}
