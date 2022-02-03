export interface IProduct {
  id: number;
  name: string;
  categoriesIds: number[];
  unitsAvailable: number[];
  price: { size?: string; price: number; unitId: number }[];
  slug: string;
  description?: string;
  attributes?: any[];
  requested?: boolean;
  conditions?: string[];
  notes?: string[];
  ingredients?: { display: boolean; options: string[]; title?: string }[];
}
