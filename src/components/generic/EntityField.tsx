import { FC } from 'react';
import {
  FunctionField,
  RaRecord,
  ReferenceField,
  TextField,
} from 'react-admin';

type EntityFieldProps = {
  source: string;
  reference: string;
  itemSource: string | ((record: RaRecord) => string);
};

export const EntityField: FC<EntityFieldProps> = ({
  source,
  reference,
  itemSource,
}: EntityFieldProps) => (
  <ReferenceField source={source} reference={reference}>
    {typeof itemSource === 'string' ? (
      <TextField source={itemSource} />
    ) : (
      <FunctionField render={itemSource} />
    )}
  </ReferenceField>
);
