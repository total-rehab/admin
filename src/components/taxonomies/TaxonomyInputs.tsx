import { FC } from 'react';
import { required, TextInput } from 'react-admin';

export const TaxonomyInputs: FC = () => (
  <>
    <TextInput source="name" validate={[required()]} fullWidth />
    <TextInput source="description" fullWidth />
  </>
);
