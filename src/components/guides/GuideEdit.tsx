import { EditForm } from '@jambff/ra-components';
import { FC } from 'react';
import { GuideInputs } from './GuideInputs';

export const GuideEdit: FC = () => (
  <EditForm
    queryOptions={{
      meta: { include: { phases: true, programs: true } },
    }}>
    <GuideInputs />
  </EditForm>
);
