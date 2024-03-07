import logo from './logo.svg';
import './App.css';
import Alluser from './component/Alluser';
import Header from './component/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignUp from './component/SignUp';
import SignIn from './component/SignIn';
import Edit from './component/Edit';

function App() {
  return (
  <BrowserRouter>
    <Header />
  <Routes>
  <Route path='/' element={<Alluser />}/>
  <Route path='/signup' element={<SignUp />}/>
  <Route path='/sign' element={<SignIn />}/>
  <Route path='/edit/:email' element={<Edit />}/>
  </Routes>
  </BrowserRouter>
  );
}

export default App;
