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

export const GuideInputs: FC = () => (
  <>
    <TextInput source="title" validate={[required()]} fullWidth />
    <FlexRow>
      <MediaLibraryInput source="heroImageId" label="Hero Image" />
      <MediaLibraryInput source="thumbnailImageId" label="Thumbnail Image" />
    </FlexRow>
    <FlexRow>
      <ReferenceArrayInput source="programs" reference="programs">
        <AutocompleteArrayOfObjectsInput
          fullWidth
          label="Programs"
          optionText={(record: RaRecord) =>
            `${record.title} - ${
              record.isForOver60s ? 'Over 60s' : 'Under 60s'
            } - ${sentenceCase(record.activityLevel)}`
          }
        />
      </ReferenceArrayInput>
      <ReferenceArrayInput source="phases" reference="phases">
        <AutocompleteArrayOfObjectsInput
          fullWidth
          label="Phases"
          optionText="name"
        />
      </ReferenceArrayInput>
    </FlexRow>
    <EditorContent source="content" fullWidth />
  </>
);
