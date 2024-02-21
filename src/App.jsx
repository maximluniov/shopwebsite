import {Routes,Route} from 'react-router-dom'
import Main from './pages/Main';
import Navbar from './components/Navbar'
import { Products } from './components/Products';
import Cart from './pages/Cart';

 


function App() {


// localStorage.clear()
 !localStorage.items? localStorage.items=JSON.stringify([]) : console.log();


  return (
    <>
    <Routes>
      <Route path="/" element={<Navbar />}>

        <Route
          path="/"
          element={<Main/>}
        />
        <Route path="/clothes" element={<Products type='clothing'/>} />
        <Route path="/electronics" element={<Products type='electronics'/>} />
        <Route path="/jewelery" element={<Products type='jewelery'/>} />
        <Route path="/cart" element={<Cart/>} />
      </Route>
    </Routes>
    </>
  );
}

export default App;
