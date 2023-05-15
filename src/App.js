import './App.css';
import { ToastContainer } from "react-toastify";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from './pages/homeScreen';
import SignUp from './pages/signup';
import BedTime from './pages/bedTime';
import GetUpTime from './pages/getUpTIme';

function App() {
  return (
    <div className="App bg-slate-900 h-screen">
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignUp />}> </Route>
          <Route path="/home" element={<HomeScreen />}> </Route>
          <Route path="/bedtime" element={<BedTime />}> </Route>
          <Route path="/getuptime" element={<GetUpTime />}> </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
