import { Box } from '@chakra-ui/react';
import { PropsWithChildren, ReactNode } from 'react';

type PropsType = PropsWithChildren<{ isActive: boolean }>;

const SidebarButton = ({ children, isActive }: PropsType) => {
  return (
    <Box
      backgroundColor={isActive ? '#DFE0FF' : undefined}
      paddingY={2}
      paddingX={4}
      width={224}
      borderRadius={10}
      _hover={{
        backgroundColor: '#DFE0FF',
        cursor: 'pointer',
      }}
    >
      {children}
    </Box>
  );
};

export default SidebarButton;
