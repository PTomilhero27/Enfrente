import { useState } from "react";
import { VStack, Heading, Icon, useTheme, Flex, Pressable } from "native-base";
import { Envelope, Key } from "phosphor-react-native";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import Logo from "../../assets/logo_primary.svg";
import Enfrente from "../../assets/ENFRENTE.svg";

export function SignIn() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const { colors } = useTheme();

  function handleSingIn() {}

  return (
    <VStack flex={1} alignItems="center" bg="gray.600" px={8} pt={24}>
      <Logo />

      <Heading mt={5}>
        {''}
      </Heading>

      <Enfrente />

      <Heading mb={10}>
        {''}
      </Heading>

      <Heading color="gray.100" fontSize="2xl" mt={19} mb={6}>
        Acesse sua conta
      </Heading>

      <Input
        placeholder="E-mail"
        mb={4}
        InputLeftElement={
          <Icon as={<Envelope color={colors.gray[300]} />} ml={4} />
        }
        onChangeText={setName}
      />

      <Input
        mb={8}
        placeholder="Senha"
        InputLeftElement={<Icon as={<Key color={colors.gray[300]} />} ml={4} />}
        secureTextEntry
        onChangeText={setPassword}
      />

      <Button title="Entrar" w="full" onPress={handleSingIn} />

      <Flex w="full" direction="row" mt={2}>
        <Heading color="white" fontSize="sm">
          Não tem conta ? {" "}
          <Heading color={colors.primary[700]} fontSize="sm">
            Criar conta !
          </Heading>
        </Heading>
      </Flex>
    </VStack>
  );
}
