import {
  Box,
  Button,
  Center,
  Col,
  Container,
  Grid,
  PasswordInput,
} from '@mantine/core';

import { useState } from 'react';

export const Register = (): JSX.Element => {
  const [opened, setOpened] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [email, setEmail] = useState('');

  return (
    <>
      <Container
        size={'xs'}
        style={{ backgroundColor: 'rgb(248, 249, 250)', borderRadius: '5px' }}
      >
        <Center style={{ height: 100 }}>
          <h2>Register</h2>
        </Center>

        <Grid grow gutter="xl" justify="center" align="space-between">
          <Col span={2}>
            {<PasswordInput label="FirstName" required={true}></PasswordInput>}
          </Col>
          <Col span={2}>
            {<PasswordInput label="LastName" required={true}></PasswordInput>}
          </Col>
        </Grid>

        <PasswordInput
          invalid={true}
          error={email}
          type="email"
          label="Email"
          required={true}
          style={{ padding: '20px 0' }}
          onChange={(event) => {
            setIsEmailValid(event.currentTarget.value !== email);
            setEmail(event.currentTarget.value);
          }}
        ></PasswordInput>

        <PasswordInput
          type="password"
          label="Password"
          required={true}
        ></PasswordInput>

        <Center style={{ height: 100 }}>
          <Button>Submit</Button>
        </Center>
      </Container>
    </>
  );
};
