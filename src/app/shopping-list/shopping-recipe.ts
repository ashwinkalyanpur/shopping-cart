export class ShoppingRecipe {
    public id: number;
    public Name: string;
    public Price: number;
    public Discount: number;
    public Category: string;
    public img_url: string;

    constructor(id: number, Name: string, Price: number, Discount: number, Category:string, img_url:string){
        this.id = id;
        this.Name = Name;
        this.Price = Price;
        this.Discount = Discount;
        this.Category = Category;
        this.img_url = img_url;
    }
}