export interface IUnit {
  id: number;
  name: string;
  location: string;
  address: string;
  telephone: string;
  email: string;
  workingHours: string[];
  lat: number;
  lng: number;
  whatsapp?: string;
}
