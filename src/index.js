import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from 'store';
import App from 'components/App';
import GlobalStyles from 'styles/globals';

const renderApp = () => {
  const store = configureStore({});

  ReactDOM.render(
    <Provider store={store}>
      <div>
        <GlobalStyles />
        <App />
      </div>
    </Provider>,
    document.getElementById('root'),
  );
};

renderApp();
