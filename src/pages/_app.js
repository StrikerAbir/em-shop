import MainLayout from '@/Layout/MainLayout';
import Footer from '@/components/Shared/Footer';
import NavBar from '@/components/Shared/NavBar';
import store from '@/redux/store/store';
import '@/styles/globals.css'
import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux'

export default function App({ Component, pageProps }) {
   if (Component.getLayout) {
    return Component.getLayout(
      <div data-theme="light">
        <Provider store={store}>
        <div className="max-w-[1920px] mx-auto">
          <Component {...pageProps} />
        </div>
        <Toaster position="top-center" reverseOrder={false} />
      </Provider>
      </div>
    );
  }
  
  return (
    <>
      <Provider store={store}>
        <div className="max-w-[1920px] mx-auto">
          <MainLayout>
            <Component {...pageProps} />
          </MainLayout>
        </div>
        <Toaster position="top-center" reverseOrder={false} />
      </Provider>
    </>
  );
}
