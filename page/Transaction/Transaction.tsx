import { FC, FormEvent, useRef } from 'react';
import { Layout } from '@/layouts/Layout';
import { SendTransactionRequest, useTonConnectUI } from '@tonconnect/ui-react';
import { toast } from 'react-toastify';

const inputClass =
  'border border-blue-500 rounded-md py-2 px-3 text-gray-700 leading-tight ' +
  'focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent shadow-sm';

export const Transaction: FC = () => {
  const [tonConnectUI] = useTonConnectUI();
  const addressRef = useRef<null | HTMLInputElement>(null);
  const amountRef = useRef<null | HTMLInputElement>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const address = addressRef?.current?.value;
    const amount = amountRef?.current?.value;

    if (address?.length && amount && Number(amount) > 0) {
      const transaction: SendTransactionRequest = {
        validUntil: Math.floor(Date.now() / 1000) + 60,
        messages: [
          {
            address,
            amount: '0'
            // amount, // use at your own risk
          },
        ],
      };
      tonConnectUI
        .sendTransaction(transaction)
        .then(() => toast('success'))
        .catch((e) => console.log(e));
    }
  };

  return (
    <Layout>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 items-center">
        <input className={inputClass} ref={amountRef} type="number" placeholder="Enter amount" />
        <input className={inputClass} ref={addressRef} type="text" placeholder="Enter address" />
        <button
          className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          type="submit"
        >
          Send
        </button>
      </form>
    </Layout>
  );
};
