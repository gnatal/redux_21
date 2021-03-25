import { Provider } from 'react-redux';

import 'bootstrap/dist/css/bootstrap.min.css';
import AboutUs from './components/AboutUs'
import Home from './components/Home'
import Subscribe from './components/Subscribe'
import store from './store'



const App: React.FC = () => {
  return (
    <>
      <Provider store={store}>
        <Home />
        <Subscribe />
        <AboutUs />
      </Provider>
    </>
  );
}

export default App;
