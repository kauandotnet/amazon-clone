import { makeVar } from '@apollo/client';

export interface UserVarProps {
  username: string;
  email: string;
  accessToken: string;
  isLogin: boolean;
}

export const userVar = makeVar<UserVarProps>({
  username: 'Arif',
  email: '',
  accessToken: `${localStorage.getItem('x-token') || ''}`,
  isLogin: !!`${localStorage.getItem('x-token') || ''}`,
});
