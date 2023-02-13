import { Avatar, Box, Button, HStack, Text, VStack } from '@chakra-ui/react';

import AccountIc from '../../../assets/icons/AccountIc';
import AvatarIc from '../../../assets/icons/AvatarIc';
import CreditCardIc from '../../../assets/icons/CreditCardIc';
import FaqIc from '../../../assets/icons/FaqIc';
import FolderIc from '../../../assets/icons/FolderIc';
import GlobeIc from '../../../assets/icons/GlobeIc';
import LockIc from '../../../assets/icons/LockIc';
import SmallLineIc from '../../../assets/icons/SmallLineIc';
import UserSettingsIc from '../../../assets/icons/UserSettingsIc';
import SidebarButton from '../../../components/SidebarButton';

type Props = {};

const SidebarMenus = (props: Props) => {
  return (
    <Box my={6} width="20%">
      <VStack align="stretch" spacing={2}>
        <HStack spacing={4}>
          <AvatarIc />
          <Text fontSize="md">Username</Text>
        </HStack>
        <HStack spacing={4}>
          <SmallLineIc />
          <Text fontSize={13} color="gray.400">
            Personal Information
          </Text>
        </HStack>
      </VStack>

      <VStack spacing={4} align="stretch">
        <SidebarButton isActive={false}>
          <HStack>
            <AccountIc />
            <Text fontSize="13">My account</Text>
          </HStack>
        </SidebarButton>
        <SidebarButton isActive={false}>
          <HStack>
            <LockIc />
            <Text fontSize="13">Login & Security</Text>
          </HStack>
        </SidebarButton>
      </VStack>

      <VStack align="stretch" spacing={2} mt={4}>
        <HStack spacing={4}>
          <Avatar name="Workspace Name" />
          <Text fontSize="md">Workspace Name</Text>
        </HStack>
        <HStack spacing={4}>
          <SmallLineIc />
          <Text fontSize={13} color="gray.400">
            Workspaces details
          </Text>
        </HStack>
      </VStack>

      <VStack spacing={4} align="stretch">
        <SidebarButton isActive={false}>
          <HStack>
            <FolderIc />
            <Text fontSize="13">Team Details</Text>
          </HStack>
        </SidebarButton>
        <SidebarButton isActive>
          <HStack>
            <UserSettingsIc />
            <Text fontSize="13">People</Text>
          </HStack>
        </SidebarButton>
        <SidebarButton isActive={false}>
          <HStack>
            <GlobeIc />
            <Text fontSize="13">Social accounts</Text>
          </HStack>
        </SidebarButton>
        <SidebarButton isActive={false}>
          <HStack>
            <CreditCardIc />
            <Text fontSize="13">Billing & plans</Text>
          </HStack>
        </SidebarButton>
        <SidebarButton isActive={false}>
          <HStack>
            <FaqIc />
            <Text fontSize="13">FAQ</Text>
          </HStack>
        </SidebarButton>
      </VStack>
      <Button size="sm" variant="outline" colorScheme="gray" mt={4}>
        Create new Workspace
      </Button>
    </Box>
  );
};

export default SidebarMenus;
