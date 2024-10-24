import { TON_VALUE } from '@/shared/constants';

export const formatBalance = (balance: string) => `${(+balance / TON_VALUE).toFixed(2)}`;
