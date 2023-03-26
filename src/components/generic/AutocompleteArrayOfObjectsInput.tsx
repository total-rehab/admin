import {
  AutocompleteArrayInput,
  AutocompleteArrayInputProps,
} from 'react-admin';

export const AutocompleteArrayOfObjectsInput = (
  props: AutocompleteArrayInputProps,
) => (
  <AutocompleteArrayInput
    parse={(list: Array<{ id: number } | number> = []) =>
      list.map((item) => (typeof item === 'number' ? { id: item } : item))
    }
    format={(list: Array<{ id: number } | number> = []) =>
      list.map((item) => (typeof item === 'number' ? item : item.id))
    }
    {...props}
  />
);
