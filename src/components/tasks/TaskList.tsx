import { FC } from 'react';
import {
  AutocompleteInput,
  Datagrid,
  DateField,
  FunctionField,
  List,
  NumberField,
  NumberInput,
  RaRecord,
  ReferenceInput,
  TextField,
  Toolbar,
} from 'react-admin';
import { sentenceCase } from 'change-case';
import { EntityField } from '../generic/EntityField';
import { ListActions } from '../ListActions';

const filters = [
  <ReferenceInput
    alwaysOn
    key="program"
    source="programId"
    reference="programs">
    <AutocompleteInput
      sx={{ width: 300 }}
      label="Select a program"
      optionText={(record: RaRecord) =>
        `${record.title} - ${
          record.isForOver60s ? 'Over 60s' : 'Under 60s'
        } - ${sentenceCase(record.activityLevel)}`
      }
    />
  </ReferenceInput>,
  <NumberInput key="week" source="weekNumber" />,
];

export const TaskList: FC = () => (
  <List
    actions={<ListActions hasFilters hasBulkCreate />}
    filters={filters}
    perPage={25}
    queryOptions={{
      meta: { include: { activity: true } },
    }}>
    <Datagrid rowClick="edit">
      <NumberField source="weekNumber" textAlign="center" />
      <EntityField
        source="activityId"
        reference="activities"
        itemSource="name"
      />
      <TextField source="reps" textAlign="center" />
      <NumberField source="sets" textAlign="center" />
      <FunctionField
        label="Days"
        textAlign="center"
        render={(record: RaRecord) => record.days.sort().join()}
      />
      <EntityField
        source="programId"
        reference="programs"
        itemSource={(record: RaRecord) =>
          `${record.title} - ${
            record.isForOver60s ? 'Over 60s' : 'Under 60s'
          } - ${sentenceCase(record.activityLevel ?? '')}`
        }
      />
      <DateField source="createdAt" textAlign="center" showTime />
      <DateField source="updatedAt" textAlign="center" showTime />
      <TextField source="id" textAlign="center" />
    </Datagrid>
  </List>
);
