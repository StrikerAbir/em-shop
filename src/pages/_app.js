import store from '@/redux/store/store';
import '@/styles/globals.css'
import { Provider } from 'react-redux'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <div data-theme="light">
          <Component {...pageProps} />
        </div>
      </Provider>
    </>
  );
}
