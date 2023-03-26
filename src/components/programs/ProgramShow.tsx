import {
  Show,
  TextField,
  RichTextField,
  TabbedShowLayout,
  ReferenceManyField,
  Datagrid,
  BooleanField,
  NumberField,
} from 'react-admin';
import { EntityField } from '../generic/EntityField';

export const ProgramShow = () => (
  <Show>
    <TabbedShowLayout>
      <TabbedShowLayout.Tab label="summary">
        <TextField source="title" />
        <BooleanField source="isForOver60s" />
        <TextField source="activityLevel" />
      </TabbedShowLayout.Tab>
      <TabbedShowLayout.Tab label="content">
        <RichTextField className="prose" source="content" label={false} />
      </TabbedShowLayout.Tab>
      <TabbedShowLayout.Tab label="tasks" path="tasks">
        <ReferenceManyField reference="tasks" target="programId" label={false}>
          <Datagrid rowClick="edit" bulkActionButtons={false}>
            <NumberField source="weekNumber" textAlign="left" />
            <EntityField
              source="activityId"
              reference="activities"
              itemSource="name"
            />
            <TextField source="reps" textAlign="center" />
            <NumberField source="sets" textAlign="center" />
            <TextField source="frequency" textAlign="center" />
            <NumberField source="restPeriod" textAlign="center" />
            <NumberField source="days" textAlign="center" />
          </Datagrid>
        </ReferenceManyField>
      </TabbedShowLayout.Tab>
    </TabbedShowLayout>
  </Show>
);
