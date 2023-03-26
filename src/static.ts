import { getAllIdsFrom } from './supabase';

export const getStaticPathsFromList = async (
  from: 'Plan' | 'BlogPost',
  perPage: number,
) => {
  const ids = await getAllIdsFrom(from);
  const pages = Math.ceil(ids.length / perPage);

  return {
    paths: Array(pages)
      .fill(null)
      .map((_, i) => ({ params: { page: String(i + 1) } })),
    fallback: false,
  };
};

export const getStaticPathsFrom = async (from: 'Plan' | 'BlogPost') => {
  const ids = await getAllIdsFrom(from);

  return {
    paths: ids.map((id) => ({ params: { id: String(id) } })),
    fallback: false,
  };
};
