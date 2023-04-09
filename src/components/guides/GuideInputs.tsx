import { StepFormIterator } from '@jambff/ra-components';
import { sentenceCase } from 'change-case';
import { MediaLibraryInput } from 'ra-supabase-media-library';
import { FC } from 'react';
import { useTheme } from '@mui/material';
import {
  ArrayInput,
  AutocompleteInput,
  RaRecord,
  ReferenceInput,
  required,
  TextInput,
} from 'react-admin';
import { FlexRow } from '../generic/FlexRow';
import { EditorContent } from '../inputs/EditorContent';

export const GuideInputs: FC = () => {
  const { spacing } = useTheme();

  return (
    <>
      <TextInput source="title" validate={[required()]} fullWidth />
      <FlexRow>
        <MediaLibraryInput source="videoId" label="Video" />
        <MediaLibraryInput source="heroImageId" label="Hero Image" />
        <MediaLibraryInput source="thumbnailImageId" label="Thumbnail Image" />
      </FlexRow>
      <EditorContent source="content" fullWidth />
      <ArrayInput source="phases" sx={{ marginBottom: spacing(4) }}>
        <StepFormIterator addButtonText="Add phase">
          <ReferenceInput source="id" reference="phases">
            <AutocompleteInput
              fullWidth
              label="Phases"
              source=""
              optionText="name"
            />
          </ReferenceInput>
        </StepFormIterator>
      </ArrayInput>
      <ArrayInput source="programs" sx={{ marginBottom: spacing(4) }}>
        <StepFormIterator addButtonText="Add program">
          <ReferenceInput source="id" reference="programs">
            <AutocompleteInput
              fullWidth
              label="Programs"
              source=""
              optionText={(record: RaRecord) => {
                console.log('opt', record);

                return `${record.title} - ${
                  record.isForOver60s ? 'Over 60s' : 'Under 60s'
                } - ${sentenceCase(record.activityLevel)}`;
              }}
            />
          </ReferenceInput>
        </StepFormIterator>
      </ArrayInput>
    </>
  );
};
