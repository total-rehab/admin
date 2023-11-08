import React, { FC } from 'react';
import {
  AutocompleteInput,
  Button,
  Datagrid,
  DateField,
  List,
  ReferenceInput,
  TextField,
  TextInput,
  useRefresh,
} from 'react-admin';
import { ToastContainer, toast } from 'react-toastify';
import { EntityField } from '../generic/EntityField';
import 'react-toastify/dist/ReactToastify.css';
import { ListActions } from '../ListActions';

export const DeepLinks: FC = () => {
  const refresh = useRefresh();

  const generateDeepLink = () => {
    const apiUrl =
      'https://b8c8-119-155-9-148.ngrok-free.app/subscription/generateDeepLink';
    const headers = {
      'ngrok-skip-browser-warning': 'true',
    };

    const requestOptions = {
      method: 'GET',
      headers,
    };

    fetch(apiUrl, requestOptions)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Request failed with status: ${response.status}`);
        }

        return response.json();
      })
      .then((data) => {
        console.log(data);
        refresh();
        toast('New Deeplink Generated');
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <List
      actions={
        <Button
          variant="contained"
          style={{ margin: '20px 20px 20px 20px' }}
          onClick={() => generateDeepLink()}>
          Generate Deeplink
        </Button>
      }
      perPage={25}>
      <Datagrid bulkActionButtons={false}>
        <TextField source="id" textAlign="center" />
        <TextField source="url" textAlign="center" />
        <TextField source="status" textAlign="center" />
      </Datagrid>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </List>
  );
};
