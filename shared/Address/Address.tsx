'use client';
import { FC } from 'react';
import { tonAddress } from '@/entities/ton.store';
import { useAtomValue } from 'jotai';
import { NavLink } from '@/shared/Header';

export const Address: FC = () => {
  const address = useAtomValue(tonAddress);

  return (
    <div>
      {address && <textarea
        className="w-full mb-8 bg-blue-100 border-2 border-blue-500 p-2 pl-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        value={address}
        readOnly
      />}
      <NavLink to="/transactions" title="Transactions" />
    </div>
  );
};
