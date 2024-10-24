'use client';
import { FC, useEffect, useState } from 'react';
import { TonConnectButton, useTonAddress } from '@tonconnect/ui-react';
import { fetchBalance } from '@/shared/api';
import { formatBalance } from '@/shared/lib';
import { useSetAtom } from 'jotai';
import { tonAddress } from '@/entities/ton.store';
import { NavLink } from '@/shared/Header/NavLink';

type Props = {
  root?: boolean;
};

export const Header: FC<Props> = ({ root }) => {
  const [balance, setBalance] = useState('');
  const address = useTonAddress();
  const setAddress = useSetAtom(tonAddress);

  useEffect(() => {
    if (address) {
      setAddress(address);
      fetchBalance(address).then((response) => {
        if (response.ok) setBalance(formatBalance(response.result));
        if (!response.ok && response.result) alert(response.result);
      });
    }
  }, [address]);

  return (
    <header className="flex justify-between p-4 items-center max-w-screen-sm w-full">
      {root ? <TonConnectButton /> : <NavLink to="/" title="Wallet" />}
      {balance && (
        <div className="p-3 bg-lightBlue-500 text-white text-base rounded-3xl flex items-center">
          BALANCE:<span className="text-green-400 inline-flex px-4">{balance}</span>TON
        </div>
      )}
    </header>
  );
};
