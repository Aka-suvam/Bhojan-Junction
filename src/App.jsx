import  Header from '../src/Components/Header/Header.jsx';
import { Outlet } from 'react-router-dom';
const App=()=> {
 

  return (
    <>
    <Header/>
    <Outlet/>
    
    </>
  )
}

export default App
