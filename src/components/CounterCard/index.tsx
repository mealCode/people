import { Box, Flex, Skeleton, Text } from '@chakra-ui/react';

type PropsType = {
  counter: number;
  status: 'Active' | 'Pending';
  isFetching: boolean;
};

const CounterCard = ({ counter, status, isFetching }: PropsType) => {
  return (
    <Flex
      borderWidth={1}
      borderColor="#262FFC"
      borderRadius={12}
      width={154}
      height={12}
      paddingY={12}
      justifyContent="center"
      alignItems="center"
      flexDir="column"
    >
      {isFetching ? (
        <Box width={55}>
          <Skeleton height={8} />
        </Box>
      ) : (
        <Text fontSize={36} fontWeight="bold">
          {counter}
        </Text>
      )}

      <Text fontWeight="bold">{status}</Text>
    </Flex>
  );
};

export default CounterCard;
