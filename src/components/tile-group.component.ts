import {
  Component,
  Input,
  OnInit,
  ViewChild,
  ComponentFactoryResolver,
} from '@angular/core';
import { TileDirective } from '../app/tile.directive';
import { TileItem } from '../app/tile-item';
import { TileComponent } from '../app/tile.type';

@Component({
  selector: 'tile-group',
  template: `
    <div class="tile-group">
      <h3>{{ groupTitle }}</h3>
      <ng-template tile-host></ng-template>
    </div>
  `,
})
export class TileGroupComponent implements OnInit {
  @Input() tiles: TileItem[];
  @Input() groupTitle: string;
  @ViewChild(TileDirective, { static: true }) tileHost: TileDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  ngOnInit() {
    this.loadComponents();
  }

  loadComponents() {
    const viewContainerRef = this.tileHost.viewContainerRef;
    viewContainerRef.clear();

    this.tiles.forEach(({ component, data }) => {
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
        component,
      );

      const componentRef = viewContainerRef.createComponent(componentFactory);
      (<TileComponent>componentRef.instance).data = data;
    });
  }
}
