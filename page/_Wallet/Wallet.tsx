import { FC } from 'react';
import { Layout } from '@/layouts/Layout';
import { Address } from '@/shared/Address';

export const Wallet: FC = () => {
  return (
    <Layout root>
      <Address />
    </Layout>
  );
};
