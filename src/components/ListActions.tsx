import { FC } from 'react';
import {
  Button,
  CreateButton,
  FilterButton,
  TopToolbar,
  useCreatePath,
  useResourceContext,
} from 'react-admin';
import Add from '@mui/icons-material/Add';

type ListActionsProps = {
  hasFilters?: boolean;
  hasBulkCreate?: boolean;
};

export const ListActions: FC<ListActionsProps> = ({
  hasFilters,
  hasBulkCreate,
}: ListActionsProps) => {
  const createPath = useCreatePath();
  const resource = useResourceContext();

  return (
    <TopToolbar>
      {hasFilters && <FilterButton />}
      <CreateButton />
      {hasBulkCreate && (
        <Button
          label="Bulk Create"
          startIcon={<Add />}
          href={`#/bulk-create/${resource}`}
        />
      )}
    </TopToolbar>
  );
};
