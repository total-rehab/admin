import { EditForm } from '@jambff/ra-components';
import { FC } from 'react';
import { PlanInputs } from './PlanInputs';

export const PlanEdit: FC = () => (
  <EditForm
    queryOptions={{
      meta: { include: { phases: true, programs: true } },
    }}>
    <PlanInputs />
  </EditForm>
);
