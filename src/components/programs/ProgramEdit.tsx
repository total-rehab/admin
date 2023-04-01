import { ApiComponents } from '@jambff/oac';
import { EditForm } from '@jambff/ra-components';
import { FC } from 'react';
import { ProgramInputs } from './ProgramInputs';

const transform = (data: { phases: ApiComponents['ProgramPhase'][] }) => {
  Object.assign(data, {
    phases: data.phases.map((phase, i: number) => ({ ...phase, rank: i })),
  });

  return data;
};

export const ProgramEdit: FC = () => (
  <EditForm
    queryOptions={{ meta: { include: { phases: ['phase'] } } }}
    transform={transform}>
    <ProgramInputs />
  </EditForm>
);
