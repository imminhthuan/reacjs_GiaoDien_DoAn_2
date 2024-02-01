import logo from './logo.svg';
import Giaodienmatdinh from './component/giaodien/Giaodienmatdinh';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './component/Formlogin/Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Giaodienmatdinh/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </Router>
  );
}

export default App;
