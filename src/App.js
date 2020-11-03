import React, { Component } from 'react';
import Main from './components/MainComponent'
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { ConfigureStore } from './redux/configureStore'
import { Provider } from 'react-redux';

const Store = ConfigureStore()

class App extends Component {

  render() {
    return (

      <Provider store={Store}>
        <BrowserRouter>
          <div className="App">
            <Main />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
