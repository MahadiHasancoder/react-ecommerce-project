import Hello from './Pages/Home'
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import Shop from './Pages/Shop';
import Notfound from './Pages/Notfound';
import SingleProduct from './Pages/Shop/SingleProduct';
import Registation from './Pages/Registation';
import Login from './Pages/Login';
import { Context } from './Context';
import { useEffect, useState } from 'react';
import Forgetpage from './Pages/Forgetpage';

const url = 'http://localhost:3000/product';

function App() {
  const [allproduct, setallproduct] = useState(null);

    const productFatch = async () => {
        let response = await fetch(url);
        let data = await response.json()
        setallproduct(data)
    }

    useEffect(() => {
        productFatch()
    }, [])

  return (
    <Context.Provider value={allproduct}>
    <Router>
        
      <Switch>
        <Route path="/" exact> <Hello /> </Route>
        <Route path="/shop" exact> <Shop />  </Route>
        <Route path="/registration"> <Registation /> </Route>
        <Route path="/login"> <Login /> </Route>
        <Route path="/forget"> <Forgetpage /> </Route>
        {/* <Route path="/shop/SingleProduct/:name" exact> <SingleProduct />  </Route> */}
        {
          allproduct && 
          <>
            <Route path="/shop/singleProduct/:name/:id" exact> <SingleProduct />  </Route>
            <Route exact> <Notfound /> </Route> 
          </>
        }
      </Switch>
    </Router>
    </Context.Provider>
  );
}

export default App;
