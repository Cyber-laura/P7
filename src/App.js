import Home from './pages/Home';
import Card from './pages/Card';
import About from './pages/About'

import {Routes, Route} from "react-router-dom";

function App() {
  return (
    <div>
        <Routes>
          <Route path="/" element={ <Home /> }/>
          <Route path="/card/:id" element={<Card/>} />
          <Route path='/a-propos' element={ <About /> }/>
        </Routes>
    </div>
  );
}

export default App;
