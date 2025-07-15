import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Success from './pages/Success';
import Failure from './pages/Failure';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/success" element={<Success />} />
      <Route path="/failure" element={<Failure />} />
    </Routes>
  );
}

export default App;
