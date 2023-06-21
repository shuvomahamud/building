import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './component/Home';
import AddBuilding from './component/AddBuilding';
import Menu from './component/Menu';

function App() {
  return (
    <Router>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddBuilding />} />
        {/* Add more Routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;

