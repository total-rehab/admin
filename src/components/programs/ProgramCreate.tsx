import { CreateForm } from '@jambff/ra-components';
import { FC } from 'react';
import { ProgramInputs } from './ProgramInputs';

export const ProgramCreate: FC = () => (
  <CreateForm>
    <ProgramInputs />
  </CreateForm>
);
