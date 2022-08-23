import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import BookApp from './pages/BookApp';

const App = () => {
    return(
      <Provider store={store}>
          <BookApp/>
      </Provider>
    )
}

export default App;
