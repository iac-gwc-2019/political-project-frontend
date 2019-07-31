import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './components/AppRouter';
<<<<<<< HEAD

class App extends React.Component {
  render() {
    return <AppRouter />;
  }
}

ReactDOM.render(<App />, document.getElementById('app-root'));
=======
import './index.scss';
import $ from 'jquery';
import * as serviceWorker from './components/serviceWorker';


ReactDOM.render(<AppRouter />, document.getElementById('app-root'));
serviceWorker.unregister();
>>>>>>> 5bf01b5... integrated app with react bootstrap for prettier
