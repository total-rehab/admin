import { FC, useCallback, useState } from 'react';
import {
  Datagrid,
  DeleteButton,
  EditButton,
  FunctionField,
  List,
  NumberField,
  RaRecord,
  ResourceContextProvider,
  TextField,
  useNotify,
  useRefresh,
} from 'react-admin';
import { Box, Typography, useTheme, Divider } from '@mui/material';
import { useFormContext } from '@jambff/ra-components/dist/forms/FormProvider';
import { EntityField } from '../generic/EntityField';
import { TaskCreate } from './TaskCreate';

const EmptyListPlaceholder = () => (
  <Box textAlign="center" m={1} sx={{ width: '100%' }}>
    <Typography variant="body1" paragraph>
      Create tasks for the selected program and week by filling in the fields
      below.
    </Typography>
  </Box>
);

export const TaskBulkCreate: FC = () => {
  const { spacing } = useTheme();
  const notify = useNotify();
  const refresh = useRefresh();
  const [selectedProgramId, setSelectedProgramId] = useState<number>();
  const [selectedWeekNumber, setSelectedWeekNumber] = useState<number>();
  const { onError } = useFormContext();

  const onSuccess = useCallback(() => {
    notify('Task created');
    refresh();
  }, [notify, refresh]);

  return (
    <ResourceContextProvider value="tasks">
      <TaskCreate
        mutationOptions={{ onSuccess, onError }}
        onProgramIdChange={setSelectedProgramId}
        onWeekChange={setSelectedWeekNumber}>
        {selectedProgramId && (
          <List
            perPage={50}
            filter={{
              programId: selectedProgramId,
              weekNumber: selectedWeekNumber,
            }}
            actions={false}
            sx={{ width: '100%' }}
            empty={<EmptyListPlaceholder />}>
            <Datagrid rowClick="edit" bulkActionButtons={false}>
              <NumberField source="weekNumber" textAlign="center" />
              <EntityField
                source="activityId"
                reference="activities"
                itemSource="name"
              />
              <NumberField source="sets" textAlign="center" />
              <TextField source="reps" textAlign="center" />
              <TextField source="restPeriod" textAlign="center" />
              <TextField source="frequency" textAlign="center" />
              <FunctionField
                label="Days"
                textAlign="center"
                render={(record: RaRecord) => record.days.sort().join()}
              />{' '}
              <DeleteButton redirect={false} />
            </Datagrid>
          </List>
        )}
        <Divider light sx={{ marginBottom: spacing(2) }} />
      </TaskCreate>
    </ResourceContextProvider>
  );
};
