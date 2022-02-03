import { IUnit } from "../interfaces/unit.interface";

export class Unit implements IUnit {
  constructor(
    public id: number,
    public name: string,
    public location: string,
    public address: string,
    public telephone: string,
    public email: string,
    public workingHours: string[],
    public lat: number,
    public lng: number,
    public whatsapp?: string
  ) {}
}
