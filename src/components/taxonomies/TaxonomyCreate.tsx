import { FC } from 'react';
import { CreateForm } from '@jambff/ra-components';
import { TaxonomyInputs } from './TaxonomyInputs';

export const TaxonomyCreate: FC = () => (
  <CreateForm>
    <TaxonomyInputs />
  </CreateForm>
);
