import type { GetStaticProps, NextPage } from 'next';
import dynamic from 'next/dynamic';
import React from 'react';

type AdminPageProps = {
  appEnv: 'production' | 'staging';
};

const App = dynamic(() => import('../components/App'), { ssr: false });

const AdminPage: NextPage<AdminPageProps> = ({ appEnv }) => (
  <App appEnv={appEnv} />
);

export const getStaticProps: GetStaticProps<AdminPageProps> = () => ({
  props: {
    appEnv: process.env.APP_ENV === 'production' ? 'production' : 'staging',
  },
});

export default AdminPage;
