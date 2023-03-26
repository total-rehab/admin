import { sentenceCase } from 'change-case';
import { MediaLibraryInput } from 'ra-supabase-media-library';
import { FC } from 'react';
import {
  RaRecord,
  ReferenceArrayInput,
  required,
  TextInput,
} from 'react-admin';
import { AutocompleteArrayOfObjectsInput } from '../generic/AutocompleteArrayOfObjectsInput';

import { FlexRow } from '../generic/FlexRow';
import { EditorContent } from '../inputs/EditorContent';

export const BlogPostInputs: FC = () => (
  <>
    <TextInput source="title" validate={[required()]} fullWidth />
    <FlexRow>
      <MediaLibraryInput source="heroImageId" label="Hero Image" />
      <MediaLibraryInput source="thumbnailImageId" label="Thumbnail Image" />
    </FlexRow>
    <EditorContent source="content" fullWidth />
  </>
);
