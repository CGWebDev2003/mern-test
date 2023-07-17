import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Pages and Components
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className='App'>
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
