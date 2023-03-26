import { EditForm } from '@jambff/ra-components';
import { FC } from 'react';
import { TaskInputs } from './TaskInputs';

export const TaskEdit: FC = () => (
  <EditForm>
    <TaskInputs />
  </EditForm>
);
