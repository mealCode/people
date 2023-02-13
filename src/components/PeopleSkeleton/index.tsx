import { Box, Flex, Skeleton, SkeletonCircle } from '@chakra-ui/react';

type PropsType = {
  width: number;
};

const PeopleSkeleton = ({ width }: PropsType) => {
  return (
    <Flex flexDir="row" align="center">
      <Box width={50}>
        <SkeletonCircle size="10" />
      </Box>
      <Box width={width}>
        <Skeleton height={6} />
      </Box>
    </Flex>
  );
};

export default PeopleSkeleton;
