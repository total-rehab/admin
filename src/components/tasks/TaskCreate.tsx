import { CreateForm } from '@jambff/ra-components';
import { FC, ReactNode } from 'react';
import { CreateProps } from 'react-admin';
import { TaskInputs } from './TaskInputs';

type TaskCreateProps = {
  children?: ReactNode;
  onProgramIdChange?: (programId: number) => void;
  onWeekChange?: (week: number) => void;
  mutationOptions?: CreateProps['mutationOptions'];
};

export const TaskCreate: FC<TaskCreateProps> = ({
  children,
  onProgramIdChange,
  onWeekChange,
  mutationOptions,
}: TaskCreateProps) => (
  <CreateForm mutationOptions={mutationOptions}>
    <TaskInputs
      onProgramIdChange={onProgramIdChange}
      onWeekChange={onWeekChange}>
      {children}
    </TaskInputs>
  </CreateForm>
);
