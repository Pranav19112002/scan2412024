
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Addscanning from './components/Addscanning/Addscanning';
import Adlogin from './Admin/Adlogin';
import Editscanning from './components/Editscanning/Editscanning';
import ViewScanning from './components/Viewscanning/Viewscanning';
import Adregister from './Admin/Adregister';
import Adminpage from './screens/Adminpage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path={'/login'} element={<Adlogin method='post'/>}></Route> 
      <Route path={'/addscan'} element={<Addscanning />}></Route>
      <Route path={'/register'} element={<Adregister />}></Route>
      <Route path={'/panel'} element={<Adminpage />}></Route>
      <Route path={'/view'} element={<ViewScanning />}></Route>
      <Route path={'/edit'} element={<Editscanning />}></Route>

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
