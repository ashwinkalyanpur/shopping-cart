import { ItemModel } from './item.model';

export class TotalCartItem {
    public items: ItemModel[] = new Array<ItemModel>();
    public itemsTotal: number = 0;

  public updateFrom(src: TotalCartItem) {
    this.items = src.items;
    this.itemsTotal = src.itemsTotal;
  }
}