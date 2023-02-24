export interface CreateUserRequest {
  name: string;
  login: string;
  email?: string;
  password: string;
}

export interface User {
  id: string;
  name: string;
  login: string;
  email?: string;
  password: string;
  createTimeStamp: Date;
}
