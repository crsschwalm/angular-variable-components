import { __decorate } from "tslib";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { PlaceholderShortComponent } from "./placeholder-short.component";
import { PlaceholderLongComponent } from "./placeholder-long.component";
import { TileBannerComponent } from "./tile-banner.component";
import { TileDirective } from "./tile.directive";
import { TileService } from "./tile.service";
let AppModule = class AppModule {
    constructor() { }
};
AppModule = __decorate([
    NgModule({
        imports: [BrowserModule],
        providers: [TileService],
        declarations: [
            AppComponent,
            TileBannerComponent,
            PlaceholderShortComponent,
            PlaceholderLongComponent,
            TileDirective
        ],
        entryComponents: [PlaceholderLongComponent, PlaceholderShortComponent],
        bootstrap: [AppComponent]
    })
], AppModule);
export { AppModule };
/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
//# sourceMappingURL=app.module.js.map