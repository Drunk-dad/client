import React from 'react';
import { Provider } from 'react-redux';
import { store } from './reducers';
import NavBar from './components/NavBar/NavBar';

const App = () => (
    <Provider store={store}>
        <NavBar />
        <div>123</div>
    </Provider>
);

export default App;
