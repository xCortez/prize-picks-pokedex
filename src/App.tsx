import './App.css';
import History from './views/history';
import Home from './views/home';
import Navbar from './components/navigation/navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/history/store';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/history" Component={History} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
