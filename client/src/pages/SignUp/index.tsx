/**
 * SignUp
 */

import React from 'react';
import { Row, Col, Divider } from 'antd';
import SignUpForm from 'containers/SignUpForm';
import Spacing from 'components/Spacing';
import Button from 'components/Button';
import { useHistory } from 'react-router-dom';
import { Routes } from 'enums/Routes';

export const SignUp: React.FC = () => {
  const history = useHistory();

  return (
    <Row justify="center">
      <Col span={8}>
        <Spacing height="2rem" />
        <SignUpForm />
        <Divider>Already have an account?</Divider>
        <Button block onClick={() => history.push(Routes.SIGNIN)}>
          Sign in to you account
        </Button>
      </Col>
    </Row>
  );
};

export default SignUp;
