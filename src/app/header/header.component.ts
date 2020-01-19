import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CartDataService } from '../shopping-list/cartdata.services';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  nCount : number;
  @Output() itemSelected = new EventEmitter<string>();

  onSelect(feature: string){
    this.itemSelected.emit(feature);
}

  constructor(private _cartdataService: CartDataService) { }

  ngOnInit() {
    this._cartdataService.cast.subscribe(
      totalItems=>  this.nCount = totalItems);
   }
  }
