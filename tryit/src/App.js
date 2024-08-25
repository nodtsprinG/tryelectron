import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Applicant from './Pages/Applicant'
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Applicant />} />
      </Routes>
    </Router>
  );
}

export default App;
