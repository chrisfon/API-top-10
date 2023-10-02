
import './App.css';
import {Routes,Route} from "react-router-dom";
import Home from './pages/Home';
import Lesson from './pages/Lesson';
import Sublesson from './pages/Sublesson';

function App() {
  return (
    <div className="App">
    <main>
      <Routes>
        <Route
          path="/" 
          element={<Home />} 
        />
        <Route
          path="/lessons/:lessonId" 
          element={<Lesson />}
        />
        <Route
          path="/lessons/:lessonId/sublessons/:sublessonId"
          element={<Sublesson />}
        />
      </Routes>
    </main>
  </div>
  );
}

export default App;
