import './App.css';

import { BrowserRouter,Routes,Route } from 'react-router-dom';

//导入页面组件
import Layout from './views/Layout/index';
import Login from './views/Login/index'



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/layout" element={<Layout/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
