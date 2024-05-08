import './App.css';
import LoginPage from './Components/LoginPage';
import HomePage from './Components/HomePage';
import SucessPage from './Components/SucessPage';
import {  Route,  Routes } from 'react-router-dom';



function App() {
  return (
    <>
    <main>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/success' element={<SucessPage/>}/>

      </Routes>
    </main>
    </>
  );
}

export default App;
