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
  ClockAfternoon,
  CircleWavyCheck,
} from "phosphor-react-native";

export type OrderProps = {
  id: string;
  name: string;
  cpf: string;
  cep: string;
  when: string;
  status: "open" | "closed";
};

type Props = IPressableProps & {
  data: OrderProps;
};

export function Order({ data, ...rest }: Props) {
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
        <Box h="full" w={2} bg={colors.green[300]} />

        <VStack flex={1} my={5} ml={5}>
          <Text color="white" fontSize="md">
            Nome: {data.name}
          </Text>

          <HStack>
            <ClockAfternoon size={15} color={colors.gray[300]} />
            <Text color="gray.300" fontSize="xs" ml={1}>
              {data.when}
            </Text>
          </HStack>
        </VStack>

        <Circle bg="gray.500" h={12} w={12} mr={5}>
            <CircleWavyCheck size={24} color={colors.green[300]} />
        </Circle>
      </HStack>
    </Pressable>
  );
}
