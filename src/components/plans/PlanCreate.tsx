import { CreateForm } from '@jambff/ra-components';
import { FC } from 'react';
import { PlanInputs } from './PlanInputs';

export const PlanCreate: FC = () => (
  <CreateForm>
    <PlanInputs />
  </CreateForm>
);
