export const fetchBalance = async (address: string): Promise<{ ok: boolean; result: string }> => {
  const res = await fetch(`https://toncenter.com/api/v2/getAddressBalance?address=${address}`);
  return await res.json();
};
