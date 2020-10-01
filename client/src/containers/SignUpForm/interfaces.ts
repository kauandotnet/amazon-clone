import { FieldNames } from './enums';
export interface SignUpData {
  register: {
    ok: boolean;
  };
}
export interface SignUpVar {
  username: string;
  email: string;
  password: string;
}

export interface SignUpFormValues {
  [FieldNames.USERNAME]: string;
  [FieldNames.EMAIL]: string;
  [FieldNames.PASSWORD]: string;
  [FieldNames.CONFIRM_PASSWORD]: string;
}
