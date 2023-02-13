import { Box, Button, Flex, HStack } from '@chakra-ui/react';
import { useState } from 'react';

import PlusIc from '../../assets/icons/PlustIc';
import CounterCard from '../../components/CounterCard';
import TopNavigation from '../../components/navigations/TopNavigation';
import MembersList from '../../components/MembersList';
import SearchInput from '../../components/SearchInput';
import SidebarMenus from './SidebarMenus';

const Dashboard = () => {
  const [searchKey, setSearchKey] = useState<string | undefined>();
  const [countActive, setCountActive] = useState(0);
  const [countPending, setCountPending] = useState(0);
  const [isInitializing, setIsInitializing] = useState(false);

  return (
    <Box>
      <TopNavigation />
      <Flex mx={12}>
        <SidebarMenus />
        <Box my={6} width="80%">
          <HStack spacing={2}>
            <CounterCard
              counter={countActive}
              status="Active"
              isFetching={isInitializing}
            />
            <CounterCard
              counter={countPending}
              status="Pending"
              isFetching={isInitializing}
            />
          </HStack>
          <Flex mt={8} flexDir="row" justify="space-between">
            <SearchInput setSearchKey={setSearchKey} />
            <Button
              leftIcon={<PlusIc />}
              colorScheme="gray"
              variant="outline"
              size="sm"
            >
              Invite people
            </Button>
          </Flex>
          <MembersList
            searchKey={searchKey}
            setCountActive={setCountActive}
            setCountPending={setCountPending}
            setIsInitializing={setIsInitializing}
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default Dashboard;
