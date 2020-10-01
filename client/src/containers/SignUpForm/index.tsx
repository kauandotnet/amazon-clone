/**
 * LoginForm
 */

import React from 'react';
import { Card, Input, Space, Button as AntdButton, message } from 'antd';
import { useMutation, useReactiveVar } from '@apollo/client';
import { useHistory, useLocation, useParams, useRouteMatch } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { FieldNames } from './enums';
import { USER_LOGIN } from './gql';
import styled from 'styled-components';
import { Container } from './styled';
import { validationSchema } from './validations';
import { yupResolver } from '@hookform/resolvers';
import { capitalCase } from 'change-case';
import { transparentize } from 'polished';
import { userVar } from 'apollo/cache/user';

// TODO: move to its component
const Button = styled(AntdButton)`
  &&& {
    background-color: ${p => p.theme.colors.amazonorange};

    &:hover,
    :focus,
    :active {
      color: black;
      background-color: ${p => transparentize(0.3, p.theme.colors.amazonorange)};
      border-color: ${p => transparentize(0.3, p.theme.colors.amazonorange)};
    }
  }
`;

const SignInForm: React.FC = () => {
  const user = useReactiveVar(userVar);
  const [login, { loading }] = useMutation(USER_LOGIN, {
    onError(error) {
      message.error(error.message);
    },
    onCompleted({ login: loginData }) {
      message.success('Succesfully login!');
      console.log(loginData);
      // do something
    },
  });
  const { handleSubmit, control, errors } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = handleSubmit(values => {
    console.log('VALUES', values);
  });

  console.log(errors);

  return (
    <Card>
      <form onSubmit={onSubmit}>
        <h1>Sign-In</h1>
        <Space style={{ width: '100%' }} size="large" direction="vertical">
          <Controller
            control={control}
            name={FieldNames.USERNAME}
            placeholder={capitalCase(FieldNames.USERNAME)}
            as={Input}
          />
          <ErrorMessage errors={errors} name={FieldNames.USERNAME} />
          <Controller
            control={control}
            name={FieldNames.EMAIL}
            placeholder={capitalCase(FieldNames.EMAIL)}
            as={Input}
          />
          <Controller
            control={control}
            name={FieldNames.PASSWORD}
            placeholder={capitalCase(FieldNames.PASSWORD)}
            as={Input}
          />
          <Controller
            control={control}
            name={FieldNames.CONFIRM_PASSWORD}
            placeholder={capitalCase(FieldNames.CONFIRM_PASSWORD)}
            as={Input}
          />
          <Button htmlType="submit" block>
            Sign in
          </Button>
        </Space>
      </form>
    </Card>
  );
};

export default SignInForm;
