export class User {
  constructor(
    public id: string,
    public tokenDuration: number,
    public accessToken: string,
    public refreshToken?: string,
  ) {}
}
