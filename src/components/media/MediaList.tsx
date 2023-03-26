import { MediaLibraryRecordImageField } from 'ra-supabase-media-library';
import { FC } from 'react';
import {
  Datagrid,
  DateField,
  FunctionField,
  List,
  RaRecord,
  TextField,
} from 'react-admin';

export const MediaList: FC = () => (
  // eslint-disable-next-line react/jsx-no-useless-fragment
  <List actions={<></>}>
    <Datagrid rowClick="edit">
      <MediaLibraryRecordImageField />
      <TextField source="title" />
      <FunctionField
        label="Extension"
        textAlign="center"
        render={(record: RaRecord) => record.src.split('.').pop()}
      />
      <DateField source="createdAt" textAlign="center" showTime />
      <DateField source="updatedAt" textAlign="center" showTime />
      <TextField source="id" textAlign="center" />
    </Datagrid>
  </List>
);
