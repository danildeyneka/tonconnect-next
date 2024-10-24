'use client'
import { TonConnectUIProvider } from '@tonconnect/ui-react';
import { externalManifestUrl } from '@/shared/constants';

export const TonConnector = ({ children }: { children: React.ReactNode }) => (
  <TonConnectUIProvider manifestUrl={externalManifestUrl}>{children}</TonConnectUIProvider>
);
