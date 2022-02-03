import { IProduct } from "../interfaces/product.interface";

export class ProductDisplay implements IProduct {
  constructor(
    public id: number,
    public name: string,
    public categoriesIds: number[],
    public unitsAvailable: number[],
    public price: { size?: string; price: number; unitId: number }[],
    public slug: string,
    public description?: string
  ) {}
}
