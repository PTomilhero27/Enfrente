import {
  HStack,
  IconButton,
  VStack,
  useTheme,
  Text,
  Heading,
  FlatList,
} from "native-base";
import { useState } from "react";
import { SignOut } from "phosphor-react-native";

import { Order, OrderProps } from "../../components/Order";
import { UserCard, UserProps } from "../../components/UserCard";

import { Button } from "../../components/Button";
import { Filter } from "../../components/Filter";

import Logo from "../../assets/logo_primary.svg";

export function Home() {
  const [statusSelected, setStatusSelected] = useState<"open" | "closed">("open");

  const [user, setUser] = useState<UserProps[]>([
    {
      id: "123",
      name: "Pedro Teixeira Tomilhero",
      cpf: "50325146837",
      cep: "06851-430",
      when: "18/07/2022 às 10:00",
    },
  ]);

  const [orders, setOrders] = useState<OrderProps[]>([
    {
      id: "123",
      name: "Pedro Teixeira Tomilhero",
      cpf: "50325146837",
      cep: "06851-430",
      when: "18/07/2022 às 10:00",
      status: "open",
    },
  ]);
  const { colors } = useTheme();

  const colorType =
    statusSelected === "open" ? colors.secondary[700] : colors.green[300];

  return (
    <VStack flex={1} pb={6} bg="gray.700">
      <HStack
        w="full"
        justifyContent="space-between"
        alignItems="center"
        bg="gray.500"
        pt={12}
        pb={3}
        px={6}
      >
        <Logo height={50} />

        <IconButton icon={<SignOut size={26} color={colors.gray[300]} />} />
      </HStack>

      <VStack flex={1} px={6}>
        <HStack
          w="full"
          mt={8}
          mb={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <Heading
            color={colorType}
            letterSpacing={7}
            textTransform="uppercase"
            fontFamily="heading"
          >
            Enfrente
          </Heading>

          <Text color="gray.200">3</Text>
        </HStack>

        <HStack space={3} mb={8}>
          <Filter
            type="open"
            title="Conta"
            onPress={() => setStatusSelected("open")}
            isActive={statusSelected === "open"}
          />

          <Filter
            type="closed"
            title="Cadastrados"
            onPress={() => setStatusSelected("closed")}
            isActive={statusSelected === "closed"}
          />
        </HStack>

        {statusSelected === "open" ? (
          <UserCard  data={user[0]} />
        ) : (
          <FlatList
            data={orders}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <Order data={item} />}
            showsVerticalScrollIndicator={false}
          />
        )}

        <Button title="Novo Cadastro" />
      </VStack>
    </VStack>
  );
}
