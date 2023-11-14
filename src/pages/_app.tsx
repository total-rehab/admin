import 'normalize.css/normalize.css';
import '../../styles/global.css';

import { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';

const queryClient = new QueryClient();

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
  <QueryClientProvider client={queryClient}>
    <Component {...pageProps} />
  </QueryClientProvider>
);

export default App;
