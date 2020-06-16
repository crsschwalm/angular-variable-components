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
  selector: 'dynamic-component',
  template: `<ng-template tile-host></ng-template>`,
})
export class DynamicComponent implements OnInit {
  @Input() props: TileItem;
  @ViewChild(TileDirective, { static: true }) tileHost: TileDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  ngOnInit() {
    this.loadComponent();
  }

  loadComponent() {
    const viewContainerRef = this.tileHost.viewContainerRef;
    viewContainerRef.clear();

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
      this.props.component,
    );

    const componentRef = viewContainerRef.createComponent(componentFactory);
    (<TileComponent>componentRef.instance).data = this.props.data;
  }
}
