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
import { SIGN_UP } from './gql';
import { validationSchema } from './validations';
import { yupResolver } from '@hookform/resolvers';
import { capitalCase } from 'change-case';
import Button from 'components/Button';
import Input from 'components/Input';
import { SignUpData, SignUpVar, SignUpFormValues } from './interfaces';
import Spacing from 'components/Spacing';
import { Routes } from 'enums/Routes';

const SignUpForm: React.FC = () => {
  const history = useHistory();

  const [register, { loading }] = useMutation<SignUpData, SignUpVar>(SIGN_UP, {
    onError(error) {
      message.error(error.message);
    },
    onCompleted({ register: registerData }) {
      if (registerData.ok) {
        message.success('Succesfully create account!');
        history.push(Routes.SIGNIN);
      }

      if (!registerData.ok) {
        message.error('Something when wrong!');
      }
    },
  });
  const { handleSubmit, control, errors } = useForm<SignUpFormValues>({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = handleSubmit(values => {
    console.log(values);
    register({
      variables: {
        username: values.userName,
        email: values.email,
        password: values.password,
      },
    });
  });

  return (
    <Card>
      <form onSubmit={onSubmit}>
        <h1>Create Account</h1>
        <Controller
          control={control}
          name={FieldNames.USERNAME}
          placeholder={capitalCase(FieldNames.USERNAME)}
          as={Input}
        />
        <ErrorMessage errors={errors} name={FieldNames.USERNAME} />
        <Spacing />
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
        <Controller
          control={control}
          name={FieldNames.CONFIRM_PASSWORD}
          type="password"
          placeholder={capitalCase(FieldNames.CONFIRM_PASSWORD)}
          as={Input}
        />
        <ErrorMessage errors={errors} name={FieldNames.CONFIRM_PASSWORD} />
        <Spacing />
        <Button loading={loading} htmlType="submit" block>
          Sign up
        </Button>
      </form>
    </Card>
  );
};

export default SignUpForm;
