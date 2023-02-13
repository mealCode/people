import { Input, InputGroup, InputLeftElement, Stack } from '@chakra-ui/react';
import React, { ChangeEvent, Dispatch, SetStateAction, useState } from 'react';

import SearchIc from '../../assets/icons/SearchIc';

type PropsType = {
  setSearchKey: Dispatch<SetStateAction<string | undefined>>;
};

const SearchInput = ({ setSearchKey }: PropsType) => {
  return (
    <Stack spacing={4}>
      <InputGroup>
        <InputLeftElement pointerEvents="none" children={<SearchIc />} />
        <Input
          type="text"
          placeholder="Search Members"
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setSearchKey(e.target.value)
          }
        />
      </InputGroup>
    </Stack>
  );
};

export default SearchInput;
