import { EditForm } from '@jambff/ra-components';
import { FC } from 'react';
import { ProgramInputs } from './ProgramInputs';

export const ProgramEdit: FC = () => (
  <EditForm queryOptions={{ meta: { include: { phases: true } } }}>
    <ProgramInputs />
  </EditForm>
);
