import { Provider } from 'react-redux';

import 'bootstrap/dist/css/bootstrap.min.css';
import AboutUs from './components/AboutUs'
import Home from './components/Home'
import Subscribe from './components/Subscribe'
import store from './store'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App: React.FC = () => {
  return (
    <>
      <Provider store={store}>
        <Home />
        {/* <Subscribe /> */}
        <AboutUs />
        <ToastContainer />
      </Provider>
    </>
  );
}

export default App;
