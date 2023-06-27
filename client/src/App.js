import Post from './Post';
import './App.css';
import Header from './Header';
import {Route, Routes} from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route index element={
          <main>

            <Header/>
      
            <Post />
            <Post />
            <Post />
      
          </main>
      }/>

      <Route path={"/login"} element={
        <div>login</div>
      }/>

    </Routes>
     );
}

export default App;
