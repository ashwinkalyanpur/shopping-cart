import { Injectable } from '@angular/core';
import { FilterComponent } from './filter/filter.component';
import { SortComponent } from './sort/sort.component';

@Injectable({
  providedIn: 'root'
})
export class ComponentLoaderService {

  constructor() { }

  getComponent(componentName: string) {
    if (componentName == "SortComponent") {
      return SortComponent;
    }
    else if (componentName == "FilterComponent") {
      return FilterComponent;
    }
    else{
      return "";
    }
  }
}
