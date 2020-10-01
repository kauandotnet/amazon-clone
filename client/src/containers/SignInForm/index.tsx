/**
 * LoginForm
 */

import React from 'react';
import { Card, message } from 'antd';
import { useMutation } from '@apollo/client';
import { useHistory } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { FieldNames } from './enums';
import { USER_LOGIN } from './gql';
import { validationSchema } from './validations';
import { yupResolver } from '@hookform/resolvers';
import { capitalCase } from 'change-case';
import { userVar } from 'apollo/cache/user';
import Spacing from 'components/Spacing';
import { LoginData, LoginVars } from './interfaces';
import { LocalStorage } from 'enums/LocalStorage';
import Button from 'components/Button';
import Input from 'components/Input';
import { Routes } from 'enums/Routes';

export const SignInForm: React.FC = () => {
  const history = useHistory();
  const [login, { loading }] = useMutation<LoginData, LoginVars>(USER_LOGIN, {
    onError(error) {
      message.error(error.message);
    },
    onCompleted({ login: loginData }) {
      localStorage.setItem(LocalStorage.X_TOKEN, loginData.accessToken);
      userVar({
        username: loginData.username,
        accessToken: loginData.accessToken,
        email: loginData.email,
        isLogin: !!loginData.accessToken,
      });
      history.push(Routes.HOME);
    },
  });
  const { handleSubmit, control, errors } = useForm<{ email: string; password: string }>({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = handleSubmit(values => {
    console.log('VALUES', values);
    login({
      variables: {
        email: values.email,
        password: values.password,
      },
    });
  });

  return (
    <Card>
      <form onSubmit={onSubmit}>
        <h1>Sign-In</h1>
        <Controller
          control={control}
          name={FieldNames.EMAIL}
          placeholder={capitalCase(FieldNames.EMAIL)}
          as={Input}
        />
        <ErrorMessage errors={errors} name={FieldNames.EMAIL} />
        <Spacing />
        <Controller
          control={control}
          name={FieldNames.PASSWORD}
          type="password"
          placeholder={capitalCase(FieldNames.PASSWORD)}
          as={Input}
        />
        <ErrorMessage errors={errors} name={FieldNames.PASSWORD} />
        <Spacing />
        <Button loading={loading} htmlType="submit" block>
          Sign in
        </Button>
      </form>
    </Card>
  );
};

export default SignInForm;
