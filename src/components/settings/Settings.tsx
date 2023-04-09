import { ApiComponents } from '@jambff/oac';
import { useTheme } from '@mui/material';
import { createAuthenticatedFetch } from '@jambff/supabase-auth-fetch';
import { FC, useCallback, useEffect, useState } from 'react';
import {
  NumberInput,
  required,
  SimpleForm,
  TextInput,
  useNotify,
} from 'react-admin';
import { FieldValues } from 'react-hook-form';
import { createSupabaseClient } from '../../supabase';
import { EditorContent } from '../inputs/EditorContent';

const supabase = createSupabaseClient();
const fetch = createAuthenticatedFetch(supabase);
const settingsEndpoint = new URL('/settings', process.env.API_BASE_URL).href;

export const Settings: FC = () => {
  const [settings, setSettings] = useState<ApiComponents['Settings']>();
  const notify = useNotify();
  const { spacing } = useTheme();

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
          headers: { 'Content-Type': 'application/json' },
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
    <SimpleForm record={settings} onSubmit={updateSettings} sx={{ gap: 100 }}>
      <div
        style={{
          gap: spacing(4),
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
        }}>
        <NumberInput
          fullWidth
          validate={required()}
          source="freeDays"
          helperText="The number of days a user can complete before subscribing"
        />
        <NumberInput
          fullWidth
          validate={required()}
          source="reviewDay"
          helperText="The day that a request to leave a review is shown"
        />
        <TextInput
          fullWidth
          validate={required()}
          source="remindersMessage"
          helperText="The body of the scheduled reminder message"
        />
        <EditorContent source="termsAndConditions" fullWidth />
      </div>
    </SimpleForm>
  );
};
