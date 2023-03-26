import { FC } from 'react';
import { Datagrid, DateField, List, TextField, TextInput } from 'react-admin';
import { ListActions } from '../ListActions';

const filters = [
  <TextInput key="search" label="Search by name" source="q" alwaysOn />,
];

export const TaxonomyList: FC = () => (
  <List actions={<ListActions hasFilters />} perPage={25} filters={filters}>
    <Datagrid rowClick="edit" bulkActionButtons={false}>
      <TextField source="name" />
      <DateField source="createdAt" textAlign="center" showTime />
      <DateField source="updatedAt" textAlign="center" showTime />
      <TextField source="id" textAlign="center" />
    </Datagrid>
  </List>
);
