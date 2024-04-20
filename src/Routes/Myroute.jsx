import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Html from '../Components/Html.jsx';
import Css from '../Components/Css.jsx';
import Javascript from "../Components/Javascript.jsx";
import Git from '../Components/Git.jsx';
import Github from '../Components/Github.jsx';
import Reactx from '../Components/Reactx.jsx';
import Express from '../Components/Express.jsx';
import MongoDb from '../Components/MongoDb.jsx';
import Nodex from '../Components/Nodex.jsx';
import Nextjs from '../Components/Nextjs.jsx';
import Typescript from '../Components/Typescript.jsx';
import Menu from '../Components/Menu.jsx';

const Myroute = () => {

  return (
    <BrowserRouter>
    <Menu/>
      <Routes>
        <Route path='/' element={<h1></h1>}/>
        <Route path="/html" element={<Html />} />
        <Route path="/css" element={<Css />} />
        <Route path="/js" element={<Javascript />} />
        <Route path="/git" element={<Git />} />
        <Route path="/github" element={<Github />} />
        <Route path="/react" element={<Reactx />} />
        <Route path="/node" element={<Nodex />} />
        <Route path="/express" element={<Express />} />
        <Route path="/mongodb" element={<MongoDb />} />
        <Route path="/ts" element={<Typescript />} />
        <Route path="/next" element={<Nextjs />} />
        <Route path="*" element={<h1>not found</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Myroute;
