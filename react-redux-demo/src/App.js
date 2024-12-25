import logo from './logo.svg';
import { Provider } from 'react-redux';
import store from './redux/store';
import './App.css';
import CakeContainer from './components/CakeContainer';
import HooksCakeContainer from './components/HooksCakeContainer';
import HooksIceCreamContainer from './components/HooksIceCreamContainer';
import IceCreamContainer from './components/IceCreamContainer';
import NewCakeContainer from './components/NewCakeContainer';
import ItemContainer from './components/ItemContainer';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
    <ItemContainer cake />
    <ItemContainer />
      <HooksCakeContainer />
      <CakeContainer />
      <HooksIceCreamContainer />
      <IceCreamContainer />
      <NewCakeContainer />

    </div>
    </Provider>
  );
}

export default App;
