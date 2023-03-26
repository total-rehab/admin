import { FC } from 'react';
import { Datagrid, DateField, List, TextField } from 'react-admin';
import { ListActions } from '../ListActions';

export const UserList: FC = () => (
  <List actions={<ListActions />} perPage={25}>
    <Datagrid rowClick="edit" bulkActionButtons={false}>
      <TextField source="email" />
      <TextField source="role" />
      <DateField source="createdAt" textAlign="center" showTime />
      <DateField source="updatedAt" textAlign="center" showTime />
      <TextField source="id" textAlign="center" />
    </Datagrid>
  </List>
);
