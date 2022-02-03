export class FaunaError extends Error {
  code: string;
  override message: string;
  statusCode: number;
  constructor(error: any) {
    super();

    const errors = error.requestResult.responseContent.errors;

    this.code = errors[0].code;
    this.message = errors[0].description;
    this.statusCode = 500;

    if (this.code === 'instance not unique') {
      this.statusCode = 409;
    }

    if (this.code === 'authentication failed') {
      this.statusCode = 401;
    }

    if (this.code === 'unauthorized') {
      this.statusCode = 401;
    }

    if (this.code === 'instance not found') {
      this.statusCode = 404;
    }

    if (this.code === 'permission denied') {
      this.statusCode = 403;
    }

    console.log('FAUNA ERROR', this.code, this.message, this.name);
  }
}
