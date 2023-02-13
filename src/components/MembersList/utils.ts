import { Member } from './Type';

export const searchMembers = (searchKey: string, members: Member[]) => {
  return members.filter((member) =>
    Object.values(member).some((val) =>
      val.toLowerCase()?.includes(searchKey.toLowerCase())
    )
  );
};
