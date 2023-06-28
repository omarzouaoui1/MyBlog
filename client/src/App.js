import Post from './Post';
import './App.css';
import Header from './Header';
import {Route, Routes} from "react-router-dom";
import Layout from './Layout';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout/>}>

      <Route index element={<Post />}/>

      <Route path={"/login"} element={<div>login</div>}/>
      
      </Route>

    </Routes>
     );
}

export default App;
