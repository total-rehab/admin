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
  SelectInput,
  BooleanInput,
} from 'react-admin';
import { ToastContainer, toast } from 'react-toastify';
import { EntityField } from '../generic/EntityField';
import 'react-toastify/dist/ReactToastify.css';
import { ListActions } from '../ListActions';

// const filters = [
//   <SelectInput
//     alwaysOn
//     key="Active"
//     source="status"
//     choices={[
//       { id: 'Active', name: 'Active' },
//       { id: 'Used', name: 'Used' },
//       { id: 'Cancelled', name: 'Cancelled' },
//       { id: 'Terminated', name: 'Terminated' },
//     ]}
//   />,
// ];

export const DeepLinks: FC = () => {
  const refresh = useRefresh();

  const generateDeepLink = () => {
    const apiUrl =
      `${process.env.API_BASE_URL}/subscription/generateDeepLink` ??
      'https://bc0b-119-155-29-70.ngrok-free.app/subscription/generateDeepLink';
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
      // filters={filters}
      actions={
        <Button
          variant="contained"
          style={{ margin: '20px 20px 20px 20px' }}
          onClick={() => generateDeepLink()}>
          <span> Generate Deeplink </span>
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
