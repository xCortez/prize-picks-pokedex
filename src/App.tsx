import './App.css';
import History from './pages/history';
import Home from './pages/home';
import Navbar from './components/navigation/navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/history/store';
import Pokemon from './pages/pokemon';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/history" Component={History} />
          <Route path="/pokemon/:id" Component={Pokemon} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
