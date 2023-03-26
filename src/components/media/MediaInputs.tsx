import { MediaLibraryRecordImageField } from 'ra-supabase-media-library';
import { FC } from 'react';
import { required, TextInput } from 'react-admin';

export const MediaInputs: FC = () => {
  return (
    <>
      <TextInput source="title" fullWidth validate={[required()]} />
      <MediaLibraryRecordImageField width={500} />
    </>
  );
};
