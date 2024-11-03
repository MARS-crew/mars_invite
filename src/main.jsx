// ** dependencies Imports
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

// ** Router Imports
import App from './App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider>
    <App />
  </Provider>,
);
