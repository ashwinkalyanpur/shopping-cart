
export class Product {
  public id: string;
  public Name: string;
  public Price: number;
  public Discount: number;
  public Category: string;
  public img_url: string;

  public updateFrom(src: Product): void {
    this.id = src.id;
    this.Name = src.Name;
    this.Price = src.Price;
    this.Discount = src.Discount;
    this.Category = src.Category;
    this.img_url = src.img_url;
  }
}
