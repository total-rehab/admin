import { TextArrayInput } from '@jambff/ra-components';
import { MediaLibraryInput } from 'ra-supabase-media-library';
import { FC } from 'react';
import {
  AutocompleteInput,
  ReferenceArrayInput,
  ReferenceInput,
  required,
  TextInput,
} from 'react-admin';
import { AutocompleteArrayOfObjectsInput } from '../generic/AutocompleteArrayOfObjectsInput';
import { FlexRow } from '../generic/FlexRow';

export const ActivityInputs: FC = () => (
  <>
    <TextInput source="name" validate={[required()]} fullWidth />
    <TextInput source="description" fullWidth />
    <FlexRow>
      <MediaLibraryInput source="videoId" label="Video" />
      <MediaLibraryInput source="heroImageId" label="Hero Image" />
      <MediaLibraryInput source="thumbnailImageId" label="Thumbnail Image" />
    </FlexRow>
    <ReferenceInput label="Activity" source="modalityId" reference="modalities">
      <AutocompleteInput optionText="name" fullWidth validate={required()} />
    </ReferenceInput>
    <ReferenceArrayInput source="equipment" reference="equipment">
      <AutocompleteArrayOfObjectsInput
        fullWidth
        label="Equipment"
        optionText="name"
      />
    </ReferenceArrayInput>
    <TextArrayInput source="instructions" />
    <TextArrayInput source="tips" addButtonText="Add tip" />
  </>
);
