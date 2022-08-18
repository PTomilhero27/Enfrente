import {
  Box,
  Circle,
  HStack,
  Text,
  useTheme,
  VStack,
  Pressable,
  IPressableProps
} from "native-base";
import {
  UserCircle,
} from "phosphor-react-native";

export type UserProps = {
  id: string;
  name: string;
  cpf: string;
  cep: string;
  when: string;
};

type Props = IPressableProps & {
  data: UserProps;
};

export function UserCard({ data, ...rest }: Props) {
  const { colors } = useTheme();


  return (
    <Pressable {...rest}>
      <HStack
        bg="gray.600"
        mb={4}
        alignItems="center"
        justifyContent="space-between"
        rounded="sm"
        overflow="hidden"
      >
        <Box h="full" w={2} bg={colors.secondary[700]} />

        <VStack flex={1} my={5} ml={5}>
          <Text color="white" fontSize="md">
            Nome: {data.name}
          </Text>

          <HStack>
            <Text color="gray.300" fontSize="xs" ml={1}>
              CPF: {data.cpf}
            </Text>
          </HStack>
        </VStack>

        <Circle bg="gray.500" h={12} w={12} mr={5}>
            <UserCircle size={34} color={colors.secondary[700]} />
        </Circle>
      </HStack>
    </Pressable>
  );
}
