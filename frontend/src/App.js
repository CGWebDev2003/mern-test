import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Pages and Components
import Home from './pages/Home';
import Navbar  from './components/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/neptunecss@latest/neptune.min.css"></link>
        <Navbar />
        <div className='pages'>
          <Routes>
            <Route
              path="/"
              element={<Home />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
