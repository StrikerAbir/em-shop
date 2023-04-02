import Footer from '@/components/Shared/Footer';
import NavBar from '@/components/Shared/NavBar';
import store from '@/redux/store/store';
import '@/styles/globals.css'
import { Provider } from 'react-redux'

export default function App({ Component, pageProps }) {
  
  return (
    <>
      <Provider store={store}>
        
        <div >
          <NavBar></NavBar>
          <Component {...pageProps} />
          <Footer></Footer>
        </div>
      </Provider>
    </>
  );
}
