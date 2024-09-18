"use client"

import client from '@/apollo/client';
import { ApolloProvider } from '@apollo/client';
import { SessionProvider } from 'next-auth/react';
import React, { ReactNode } from 'react';

const ProviderLayout = ({children}:{children:ReactNode}) => {
    return (
      <SessionProvider>
  <ApolloProvider client={client}>
        {children}
        </ApolloProvider>
      </SessionProvider>
      
    );
};

export default ProviderLayout;