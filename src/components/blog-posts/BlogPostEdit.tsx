import { EditForm } from '@jambff/ra-components';
import { FC } from 'react';
import { BlogPostInputs } from './BlogPostInputs';

export const BlogPostEdit: FC = () => (
  <EditForm>
    <BlogPostInputs />
  </EditForm>
);
