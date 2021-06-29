import status from 'http-status';

export class HTTPError extends Error {
  public code: number;
  
  public constructor(message: string, code: number) {
    super(message);
    this.code = code;
  }
}

export class AuthenticationError extends HTTPError {
  public constructor() {
    super('Not Authenticated', status.UNAUTHORIZED);
  }
}

export class AuthorizationError extends HTTPError {
  public constructor() {
    super('Not Authorized', status.FORBIDDEN);
  }
}

export class NotFoundError extends HTTPError {
  public constructor() {
    super('Not Found Error', status.NOT_FOUND);
  }
}

export class UnprocessableEntityError extends HTTPError {
  public messages: any;
  public constructor(messages: any) {
    super('Unprocessable Entity Error', status.UNPROCESSABLE_ENTITY);
    this.messages = messages;
  }
}

export class InternalServerError extends HTTPError {
  public constructor() {
    super('Internal Server Error', status.INTERNAL_SERVER_ERROR);
  }
}