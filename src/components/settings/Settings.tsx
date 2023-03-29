import { ApiComponents } from '@jambff/oac';
import { createAuthenticatedFetch } from '@jambff/supabase-auth-fetch';
import { FC, useCallback, useEffect, useState } from 'react';
import {
  NumberInput,
  required,
  SimpleForm,
  useNotify,
  useUpdate,
} from 'react-admin';
import { FieldValues } from 'react-hook-form';
import { createSupabaseClient } from '../../supabase';

const supabase = createSupabaseClient();
const fetch = createAuthenticatedFetch(supabase);
const settingsEndpoint = new URL('/settings', process.env.API_BASE_URL).href;

export const Settings: FC = () => {
  const [settings, setSettings] = useState<ApiComponents['Settings']>();
  const [update] = useUpdate();
  const notify = useNotify();

  const loadSettings = useCallback(async () => {
    const res = await fetch(settingsEndpoint);

    setSettings(await res.json());
  }, []);

  const updateSettings = useCallback(
    async (newData: FieldValues) => {
      try {
        await fetch(settingsEndpoint, {
          method: 'PUT',
          body: JSON.stringify(newData),
        });
      } catch (err) {
        console.error(err);
        notify('Settings update failed', { type: 'error' });

        return;
      }

      notify('Settings updated', { type: 'success' });
    },
    [notify],
  );

  useEffect(() => {
    loadSettings();
  }, [loadSettings]);

  if (!settings) {
    return null;
  }

  return (
    <SimpleForm record={settings} onSubmit={updateSettings}>
      <NumberInput
        validate={required()}
        source="freeDays"
        helperText="The number of days a user can complete before subscribing"
      />
      <NumberInput
        validate={required()}
        source="reviewDay"
        helperText="The day that a request to leave a review is shown"
      />
    </SimpleForm>
  );
};
