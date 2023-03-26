import { FC } from 'react';
import {
  BooleanField,
  BooleanInput,
  Datagrid,
  DateField,
  FunctionField,
  List,
  RaRecord,
  SelectInput,
  TextField,
  TextInput,
} from 'react-admin';
import { sentenceCase } from 'change-case';
import { Chip, useTheme } from '@mui/material';
import { ListActions } from '../ListActions';

const filters = [
  <TextInput key="search" label="Search by title" source="q" alwaysOn />,
  <SelectInput
    key="activityLevel"
    source="activityLevel"
    choices={[
      { id: 'LIGHT', name: 'Light' },
      { id: 'MODERATE', name: 'Moderate' },
      { id: 'INTENSIVE', name: 'Intensive' },
    ]}
  />,
  <BooleanInput key="over60s" label="Over 60s" source="isForOver60s" />,
  <BooleanInput key="published" source="published" />,
];

export const ProgramList: FC = () => {
  const theme = useTheme();

  return (
    <List actions={<ListActions hasFilters />} perPage={25} filters={filters}>
      <Datagrid rowClick="edit">
        <TextField source="title" />
        <BooleanField
          label="Over 60s"
          source="isForOver60s"
          textAlign="center"
        />
        <FunctionField
          label="Activity Levels"
          textAlign="center"
          render={(record: RaRecord) => (
            <Chip
              key={record.activityLevel}
              label={sentenceCase(record.activityLevel)}
              sx={{ margin: theme.spacing(0.5) }}
            />
          )}
        />
        <BooleanField source="published" textAlign="center" />
        <DateField source="createdAt" textAlign="center" showTime />
        <DateField source="updatedAt" textAlign="center" showTime />
        <TextField source="id" textAlign="center" />
      </Datagrid>
    </List>
  );
};
