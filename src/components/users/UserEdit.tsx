import { FC } from 'react';
import { EditForm } from '@jambff/ra-components';
import { SaveButton, Toolbar, useRecordContext } from 'react-admin';
import { UserInputs } from './UserInputs';

const UserTitle = () => {
  const record = useRecordContext();

  return <span>User {record ? `${record.email}` : ''}</span>;
};

export const UserEdit: FC = () => (
  <EditForm title={<UserTitle />}>
    <UserInputs />
  </EditForm>
);
