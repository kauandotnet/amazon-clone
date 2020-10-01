/**
 * SignIn
 */

import React from 'react';
import { Row, Col, Divider } from 'antd';
import { SignInProps } from './interface';
import SignInForm from 'containers/SignInForm';
import Spacing from 'components/Spacing';
import Button from 'components/Button';
import { useHistory } from 'react-router-dom';
import { Routes } from 'enums/Routes';

export const SignIn: React.FC = () => {
  const history = useHistory();

  return (
    <Row justify="center">
      <Col span={8}>
        <Spacing height="2rem" />
        <SignInForm />
        <Divider>New to Amazon?</Divider>
        <Button block onClick={() => history.push(Routes.SIGNUP)}>
          Create your Amazon account
        </Button>
      </Col>
    </Row>
  );
};

export default SignIn;
