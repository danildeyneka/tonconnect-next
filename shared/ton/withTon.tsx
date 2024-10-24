'use client'
import React from 'react';
import { TonConnector } from '@/shared/ton/TonConnector';

export const withTon = (Children: React.ElementType) => (): React.ReactNode => {
  return (
    <TonConnector>
      <Children/>
    </TonConnector>
  );
};
