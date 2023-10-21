import { Routes, Route } from 'react-router-dom';
import { Home } from "./Home";
import { Text } from './Text';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/text" element={<Text />} />
      </Routes>
    </div>
  );
}

export default App;
