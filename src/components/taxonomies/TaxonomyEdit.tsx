import { FC } from 'react';
import { EditForm } from '@jambff/ra-components';
import { TaxonomyInputs } from './TaxonomyInputs';

export const TaxonomyEdit: FC = () => (
  <EditForm>
    <TaxonomyInputs />
  </EditForm>
);
