import { IProduct } from "../interfaces/product.interface";

export class ProductDetail implements IProduct {
  constructor(
    public id: number,
    public name: string,
    public categoriesIds: number[],
    public unitsAvailable: number[],
    public price: { size?: string; price: number; unitId: number }[],
    public slug: string,
    public description?: string,
    public attributes?: any[],
    public requested?: boolean,
    public conditions?: string[],
    public notes?: string[],
    public ingredients?: {
      display: boolean;
      options: string[];
      title?: string;
    }[]
  ) {}
}
