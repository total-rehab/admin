import { useFormContext } from '@jambff/ra-components/dist/forms/FormProvider';
import { createAuthenticatedFetch } from '@jambff/supabase-auth-fetch';
import { FC } from 'react';
import {
  NumberInput,
  required,
  SimpleForm,
  useGetOne,
  useNotify,
  useUpdate,
} from 'react-admin';
import { FieldValues } from 'react-hook-form';

export const Settings: FC = () => {
  const { data: settings } = useGetOne('settings', { id: '' });
  const [update] = useUpdate();
  const notify = useNotify();

  const onSubmit = (newData: FieldValues) => {
    update(
      'settings',
      { id: '', data: newData },
      {
        onSuccess: () => {
          notify('Settings updated', { type: 'success' });
        },
        onError: (err) => {
          console.error(err);
          notify('Settings update failed', { type: 'error' });
        },
      },
    );
  };

  return (
    <SimpleForm record={settings} onSubmit={onSubmit}>
      <NumberInput
        validate={required()}
        source="freeDays"
        helperText="The number of days a user can complete before subscribing"
      />
    </SimpleForm>
  );
};
