export interface LoginData {
  login: {
    _id: string;
    username: string;
    email: string;
    accessToken: string;
  };
}

export interface LoginVars {
  email: string;
  password: string;
}
