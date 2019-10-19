import React from 'react';
import { Image } from 'react-native';
import logo from '~/assets/logo.png';

import Backgorund from '~/components/Background';
import {
  Container,
  Form,
  FormInput,
  SubmitButton,
  SignLink,
  SignLinkText,
} from './styles';

export default function SignIn() {
  return (
    <Backgorund>
      <Container>
        <Image source={logo} />
        <Form>
          <FormInput
            icon="mail-outline"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite seu e-mail"
          />
          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Sua senha secreta"
          />
          <SubmitButton onPress={() => {}}>Entrar</SubmitButton>
        </Form>
        <SignLink onPress={() => {}}>
          <SignLinkText>Criar conta gratis</SignLinkText>
        </SignLink>
      </Container>
    </Backgorund>
  );
}
