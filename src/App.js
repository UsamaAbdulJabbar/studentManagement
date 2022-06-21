import logo from './logo.svg';
import './App.css';
import { Typography } from '@mui/material';
import AppRouting from './configuration/routing/appRouting';
import { Provider } from "react-redux";
import store from './configuration/redux/store';
function App() {
  return (
    <div className="App">
      <Provider store={store} >
        <AppRouting />

      </Provider>

    </div>
  );
}

export default App;
