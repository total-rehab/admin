import { sentenceCase } from 'change-case';
import { FC, ReactNode } from 'react';
import {
  AutocompleteInput,
  NumberInput,
  ReferenceInput,
  TextInput,
  required,
  CheckboxGroupInput,
  RaRecord,
} from 'react-admin';
import { FlexRow } from '../generic/FlexRow';

type TaskInputsProps = {
  children?: ReactNode;
  onProgramIdChange?: (programId: number) => void;
  onWeekChange?: (week: number) => void;
};

export const TaskInputs: FC<TaskInputsProps> = ({
  children,
  onProgramIdChange,
  onWeekChange,
}: TaskInputsProps) => (
  <>
    <ReferenceInput label="Program" source="programId" reference="programs">
      <AutocompleteInput
        onChange={onProgramIdChange}
        optionText={(record: RaRecord) =>
          `${record.title} - ${
            record.isForOver60s ? 'Over 60s' : 'Under 60s'
          } - ${sentenceCase(record.activityLevel)}`
        }
        fullWidth
        validate={required()}
      />
    </ReferenceInput>
    <NumberInput
      fullWidth
      source="weekNumber"
      validate={required()}
      onChange={(evt) => {
        onWeekChange?.(evt.target.value);
      }}
    />
    {children}
    <ReferenceInput label="Activity" source="activityId" reference="activities">
      <AutocompleteInput optionText="name" fullWidth validate={required()} />
    </ReferenceInput>
    <FlexRow>
      <NumberInput source="sets" />
      <TextInput source="reps" />
      <TextInput source="restPeriod" />
      <TextInput source="frequency" />
    </FlexRow>
    <CheckboxGroupInput
      source="days"
      validate={required()}
      parse={(values: number[]) =>
        values.filter((n) => [1, 2, 3, 4, 5, 6, 7].includes(n))
      }
      choices={Array(7)
        .fill(null)
        .map((_, i) => ({
          id: i + 1,
          name: `Day ${i + 1}`,
        }))}
    />
    <NumberInput fullWidth source="priority" min={1} validate={required()} />
  </>
);
