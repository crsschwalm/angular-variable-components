import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { PlaceholderShortComponent } from './placeholder-short.component';
import { PlaceholderLongComponent } from './placeholder-long.component';
import { TileGroupComponent } from './tile-group.component';
import { TileDirective } from './tile.directive';
import { TileService } from './tile.service';

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

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
