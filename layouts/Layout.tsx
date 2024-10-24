import { TonConnector } from '@/shared/ton/TonConnector';
import { Header } from '@/shared/Header/Header';
import { ToastContainer } from 'react-toastify';
import '@/app/globals.css';
import 'react-toastify/dist/ReactToastify.css';

export const Layout = ({ children, root }: { children: React.ReactNode; root?: boolean }) => {
  return (
    <div className="root items-center justify-items-center bg-blue-200 h-screen">
      <TonConnector>
        <Header root={root} />
      </TonConnector>
      <main>
        {children}
        <ToastContainer />
      </main>
    </div>
  );
};
