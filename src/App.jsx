import { Outlet } from 'react-router-dom';
import { Provider } from 'react-redux';
import  Header from '../src/Components/Header/Header.jsx';
import  appStore  from './ulits/appStore.js'
import Footer from './Components/Footer/Footer.jsx';

const App=()=> {
 

  return (
    <Provider store={appStore}>
    <div className="app" >
    <Header/>
    <Outlet/>
    <Footer/>
    
    </div>
    </Provider>
  )
}

export default App;
