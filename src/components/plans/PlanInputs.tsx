import { MediaLibraryInput } from 'ra-supabase-media-library';
import { FC } from 'react';
import { required, TextInput } from 'react-admin';
import { FlexRow } from '../generic/FlexRow';
import { EditorContent } from '../inputs/EditorContent';

export const PlanInputs: FC = () => (
  <>
    <TextInput source="title" validate={[required()]} fullWidth />
    <FlexRow>
      <MediaLibraryInput source="heroImageId" label="Hero Image" />
      <MediaLibraryInput source="thumbnailImageId" label="Thumbnail Image" />
    </FlexRow>
    <EditorContent source="content" fullWidth />
  </>
);
