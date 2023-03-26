import { CreateForm } from '@jambff/ra-components';
import { FC } from 'react';
import { TextInput, required, SelectInput, useGetIdentity } from 'react-admin';

export const UserCreate: FC = () => {
  const { identity } = useGetIdentity();
  const currentUserRole = identity?.role;

  return (
    <CreateForm>
      <TextInput
        fullWidth
        source="email"
        type="email"
        label="Email address"
        validate={[required()]}
      />
      <SelectInput
        source="role"
        defaultValue="USER"
        validate={[required()]}
        choices={[
          currentUserRole === 'ADMIN' && {
            id: 'ADMIN',
            name: 'Admin',
          },
          {
            id: 'PRACTITIONER',
            name: 'Practitioner',
          },
          {
            id: 'USER',
            name: 'User',
          },
        ].filter((x) => x)}
      />
    </CreateForm>
  );
};
