import { CreateForm } from '@jambff/ra-components';
import { FC } from 'react';
import { BlogPostInputs } from './BlogPostInputs';

export const BlogPostCreate: FC = () => (
  <CreateForm>
    <BlogPostInputs />
  </CreateForm>
);
