import { FC } from 'react';
import {
  AutocompleteInput,
  Datagrid,
  DateField,
  List,
  ReferenceInput,
  TextField,
  TextInput,
} from 'react-admin';
import { EntityField } from '../generic/EntityField';
import { ListActions } from '../ListActions';

const filters = [
  <TextInput key="search" label="Search by name" source="q" alwaysOn />,
  <ReferenceInput key="modality" source="modalityId" reference="modalities">
    <AutocompleteInput label="Modality" optionText="name" />
  </ReferenceInput>,
];

export const ActivityList: FC = () => (
  <List actions={<ListActions hasFilters />} perPage={25} filters={filters}>
    <Datagrid rowClick="edit" bulkActionButtons={false}>
      <TextField source="name" />
      <EntityField
        source="modalityId"
        reference="modalities"
        itemSource="name"
      />
      <DateField source="createdAt" textAlign="center" showTime />
      <DateField source="updatedAt" textAlign="center" showTime />
      <TextField source="id" textAlign="center" />
    </Datagrid>
  </List>
);
