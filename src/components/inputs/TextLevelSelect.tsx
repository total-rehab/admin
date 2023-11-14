import * as React from 'react';
import { useEffect, useState } from 'react';
import { useTiptapEditor } from 'ra-input-rich-text';
import { List, ListItem, ListItemText, Menu, MenuItem } from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import clsx from 'clsx';

export type LevelSelectProps = {
  size?: 'small' | 'medium' | 'large';
};

type ParagraphLevelOption = {
  label: string;
  value: 'paragraph';
};

type HeadingLevelOption = {
  label: string;
  value: 'heading';
  level: 1 | 2 | 3 | 4 | 5 | 6;
};

type LevelOption = ParagraphLevelOption | HeadingLevelOption;

const options: Array<LevelOption | HeadingLevelOption> = [
  {
    label: 'Normal',
    value: 'paragraph',
  },
  {
    // Content will always have a separate title at level 1, so start at level 2.
    label: 'Heading 1',
    value: 'heading',
    level: 2,
  },
  {
    label: 'Heading 2',
    value: 'heading',
    level: 3,
  },
  {
    label: 'Heading 3',
    value: 'heading',
    level: 4,
  },
  {
    label: 'Heading 4',
    value: 'heading',
    level: 5,
  },
];

const PREFIX = 'RaRichTextInputTextLevelSelect';

const classes = {
  list: `${PREFIX}-list`,
  sizeSmall: `${PREFIX}-sizeSmall`,
  sizeLarge: `${PREFIX}-sizeLarge`,
};

const Root = styled('div')(({ theme }) => ({
  border: `1px solid ${theme.palette.grey[300]}`,
  borderRadius: theme.shape.borderRadius,
  [`&.${classes.list}`]: {
    borderRadius: theme.shape.borderRadius,
    border: `1px solid ${alpha(theme.palette.action.active, 0.12)}`,
  },
  [`& .${classes.sizeSmall}`]: {
    paddingTop: 1,
    paddingBottom: 1,
    '& .MuiTypography-root': {
      fontSize: theme.typography.pxToRem(13),
    },
  },
  [`& .${classes.sizeLarge}`]: {
    paddingTop: 8,
    paddingBottom: 8,
    '& .MuiTypography-root': {
      fontSize: theme.typography.pxToRem(15),
    },
  },
}));

export const TextLevelSelect = (props: LevelSelectProps) => {
  const editor: any = useTiptapEditor();
  const [anchorElement, setAnchorElement] = useState<HTMLDivElement | null>(
    null,
  );
  const { size } = props;
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleMenuItemClick = (
    event: React.MouseEvent<HTMLLIElement, MouseEvent>,
    index: number,
  ) => {
    setAnchorElement(null);
    const selectedItem = options[index];

    if (selectedItem.value === 'paragraph') {
      editor.chain().focus().setParagraph().run();
    } else if (selectedItem.value === 'heading') {
      editor.chain().focus().setHeading({ level: selectedItem.level }).run();
    }
  };

  const handleClickListItem = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    setAnchorElement(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorElement(null);
  };

  useEffect(() => {
    const handleUpdate = () => {
      setSelectedOption((currentOption) =>
        options.reduce((acc, option) => {
          if (editor) {
            if (option.value === 'paragraph' && editor.isActive('paragraph')) {
              return option;
            }

            if (
              editor.isActive('heading', {
                level: (option as HeadingLevelOption).level,
              })
            ) {
              return option;
            }
          }

          return acc;
        }, currentOption),
      );
    };

    if (editor) {
      editor.on('update', handleUpdate);
      editor.on('selectionUpdate', handleUpdate);
    }

    return () => {
      if (editor) {
        editor.off('update', handleUpdate);
        editor.off('selectionUpdate', handleUpdate);
      }
    };
  }, [editor]);

  return (
    <Root>
      <List
        component="nav"
        aria-label="Select the level"
        dense
        disablePadding
        className={classes.list}>
        <ListItem
          button
          aria-haspopup="true"
          aria-controls="level-menu"
          aria-label="Current level"
          disabled={!editor?.isEditable}
          onClick={handleClickListItem}
          className={clsx({
            [classes.sizeSmall]: size === 'small',
            [classes.sizeLarge]: size === 'large',
          })}>
          <ListItemText primary={selectedOption.label} />
          <ArrowDropDownIcon />
        </ListItem>
      </List>
      <Menu
        anchorEl={anchorElement}
        open={Boolean(anchorElement)}
        id="level-menu"
        onClose={handleClose}>
        {options.map((option, index) => (
          <MenuItem
            key={option.label}
            selected={option === selectedOption}
            onClick={(event) => {
              handleMenuItemClick(event, index);
            }}>
            {option.label}
          </MenuItem>
        ))}
      </Menu>
    </Root>
  );
};
