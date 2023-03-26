import { EditForm } from '@jambff/ra-components';
import { FC } from 'react';
import { ActivityInputs } from './ActivityInputs';

export const ActivityEdit: FC = () => (
  <EditForm queryOptions={{ meta: { include: { equipment: true } } }}>
    <ActivityInputs />
  </EditForm>
);
