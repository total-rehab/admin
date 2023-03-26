import {
  GetBlogPostOptions,
  GetBlogPostResponse,
  GetBlogPostsOptions,
  GetBlogPostsResponse,
  GetPlanOptions,
  GetPlanResponse,
  GetPlansOptions,
  GetPlansResponse,
} from '@jambff/oac';
import { totalRehabApi } from './total-rehab-api';

const blogPostIncludes = {
  heroImage: true,
  thumbnailImage: true,
};

const planIncludes = {
  heroImage: true,
  thumbnailImage: true,
};

export const getBlogPost = (
  opts: GetBlogPostOptions,
): Promise<GetBlogPostResponse> =>
  totalRehabApi.getBlogPost({
    ...opts,
    query: {
      ...opts?.query,
      include: blogPostIncludes,
    },
  });

export const getBlogPosts = (
  opts?: GetBlogPostsOptions,
): Promise<GetBlogPostsResponse> =>
  totalRehabApi.getBlogPosts({
    ...opts,
    query: {
      ...opts?.query,
      include: blogPostIncludes,
    },
  });

export const getPlan = (opts: GetPlanOptions): Promise<GetPlanResponse> =>
  totalRehabApi.getPlan({
    ...opts,
    query: {
      ...opts?.query,
      include: planIncludes,
    },
  });

export const getPlans = (opts?: GetPlansOptions): Promise<GetPlansResponse> =>
  totalRehabApi.getPlans({
    ...opts,
    query: {
      ...opts?.query,
      include: planIncludes,
    },
  });
