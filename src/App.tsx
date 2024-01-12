import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './views/home';
import History from './views/history';
import Navbar from './components/navigation/navbar';

function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/history" Component={History} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
