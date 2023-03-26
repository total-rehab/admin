import {
  ClearButtons,
  FormatButtons,
  ListButtons,
  RichTextInput,
  RichTextInputProps,
  RichTextInputToolbar,
} from 'ra-input-rich-text';
import { FC } from 'react';
import { TextLevelSelect } from './TextLevelSelect';

type EditorContentProps = Omit<RichTextInputProps, 'toolbar'>;

export const EditorContent: FC<EditorContentProps> = (
  props: EditorContentProps,
) => (
  <RichTextInput
    {...props}
    className="prose max-w-none"
    toolbar={
      <div style={{ alignSelf: 'flex-start' }}>
        <RichTextInputToolbar>
          <TextLevelSelect />
          <FormatButtons />
          <ListButtons />
          <ClearButtons />
        </RichTextInputToolbar>
      </div>
    }
  />
);
