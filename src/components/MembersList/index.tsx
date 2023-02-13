import {
  Avatar,
  Box,
  Button,
  Divider,
  Flex,
  Text,
  VStack,
} from '@chakra-ui/react';
import axios from 'axios';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { useQuery } from 'react-query';

import DeleteIc from '../../assets/icons/DeleteIc';
import ErrorIc from '../../assets/icons/ErrorIc';
import PeopleModal from '../Modal';
import PeopleSkeleton from '../PeopleSkeleton';
import { API_URL, ReactQueryCacheId, skeletons } from './constants';
import { Member } from './Type';
import { searchMembers } from './utils';

type PropsType = {
  searchKey: string | undefined;
  setCountActive: Dispatch<SetStateAction<number>>;
  setCountPending: Dispatch<SetStateAction<number>>;
  setIsInitializing: Dispatch<SetStateAction<boolean>>;
};

const MembersList = ({
  searchKey,
  setCountActive,
  setCountPending,
  setIsInitializing,
}: PropsType) => {
  const [members, setMembers] = useState<Member[]>([]);
  const [currentActiveRow, setCurrentActiveRow] = useState<
    string | undefined
  >();
  const [showDeleteMemberModal, setShowDeleteMemberModal] = useState(false);
  const [selectedRow, setSelectedRow] = useState<Member | undefined>();

  const { isLoading, error, data, isFetching } = useQuery<Member[]>(
    ReactQueryCacheId.PEOPLE,
    async () => {
      const result = await axios.get(API_URL);
      return result.data;
    }
  );

  const onCloseModal = () => {
    setShowDeleteMemberModal(false);
  };

  useEffect(() => {
    setIsInitializing(isFetching);
  }, [isFetching]);

  useEffect(() => {
    if (data && !isLoading) {
      if (searchKey) {
        const results = searchMembers(searchKey, data);
        setMembers(
          results.map((member, index) => {
            const rowId = `${member.email}_${index}`;
            return {
              ...member,
              id: rowId,
            };
          })
        );
      } else {
        setMembers(
          data.map((member, index) => {
            const rowId = `${member.email}_${index}`;
            return {
              ...member,
              id: rowId,
            };
          })
        );
      }
    }
  }, [data, isLoading, searchKey]);

  const onDeleteMemberHandler = () => {
    setMembers((prevState) => {
      const result = prevState.filter(
        (member) => member.id !== selectedRow?.id
      );
      return result;
    });
    onCloseModal();
  };

  useEffect(() => {
    setCountActive(
      members.filter((member) => member.status === 'approved').length || 0
    );
    setCountPending(
      members.filter((member) => member.status === 'pending').length || 0
    );
  }, [members]);

  return (
    <Box mt={8}>
      <Flex py={4}>
        <Box width="25%">
          <Text>Name</Text>
        </Box>
        <Box width="35%">
          <Text>Email</Text>
        </Box>
        <Box width="25%">
          <Text>Status</Text>
        </Box>
        <Box width="15%"></Box>
      </Flex>
      <Box maxHeight={400} overflowY="auto">
        {isFetching ? (
          <>
            {skeletons.map((skeleton) => (
              <Flex key={skeleton.id} paddingY={4}>
                <Box width="100%">
                  <PeopleSkeleton width={skeleton.width} />
                </Box>
                <Box width="100%">
                  <PeopleSkeleton width={skeleton.width} />
                </Box>
                <Box width="100%">
                  <PeopleSkeleton width={skeleton.width} />
                </Box>
                <Box width="100%"></Box>
              </Flex>
            ))}
          </>
        ) : (
          <>
            {members &&
              members
                .filter((member) => member.email)
                .map((user) => {
                  return (
                    <Box key={user.id}>
                      <Flex
                        paddingY={4}
                        paddingX={2}
                        marginY={2}
                        _hover={{
                          cursor: 'pointer',
                          backgroundColor: 'gray.50',
                        }}
                        onMouseEnter={() => setCurrentActiveRow(user.id)}
                        onMouseLeave={() => setCurrentActiveRow(undefined)}
                        align="center"
                      >
                        <Box width="25%">
                          <Flex align="center">
                            <Avatar
                              name={`${user.firstName} ${user.lastName}`}
                              mr={2}
                            />
                            <Text>{`${user.firstName} ${user.lastName}`}</Text>
                          </Flex>
                        </Box>
                        <Box width="35%">{user.email}</Box>
                        <Box width="25%">{user.status}</Box>
                        {currentActiveRow === user.id && (
                          <Box width="15%">
                            <Button
                              leftIcon={<DeleteIc />}
                              colorScheme="gray"
                              variant="link"
                              size="sm"
                              onClick={() => {
                                setShowDeleteMemberModal(true);
                                setSelectedRow(user);
                              }}
                            >
                              Delete
                            </Button>
                          </Box>
                        )}
                      </Flex>
                      <Divider />
                    </Box>
                  );
                })}
            {members.length === 0 && !isLoading && (
              <Text color="gray.400" textAlign="center">
                No users found. Try a different search or Invite a Team Member
              </Text>
            )}
            {error && (
              <Flex justify="center" align="center">
                <ErrorIc />
                <Text color="gray.400" textAlign="center" ml={8}>
                  Something went wrong.
                </Text>
                <Button variant="link" colorScheme="blue">
                  Try again
                </Button>
              </Flex>
            )}
          </>
        )}
      </Box>
      <PeopleModal isOpen={showDeleteMemberModal} onClose={onCloseModal}>
        <Flex justify="center">
          <Avatar name={`${selectedRow?.firstName} ${selectedRow?.lastName}`} />
        </Flex>
        <VStack>
          <Text fontSize="2xl" fontWeight="bold">
            Are you sure you want to delete this person ?
          </Text>
          <Text>
            This action cannot be undone and all data associated with this
            person will be permanently removed.”
          </Text>
        </VStack>
        <Button mt={4} colorScheme="blue" onClick={onDeleteMemberHandler}>
          Yes
        </Button>
        <Button mt={4} colorScheme="blue" variant="link" onClick={onCloseModal}>
          No
        </Button>
      </PeopleModal>
    </Box>
  );
};

export default MembersList;
