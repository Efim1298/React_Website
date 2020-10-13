import React from 'react';
import GlobalStyle from './globalStyles';
import Home from './pages/homePage/Home';
import LogIn from "./pages/logIn/LogIn";
import SignUp from './pages/signUp/SignUp';
import Services from './pages/services/Services';
import Products from './pages/products/Products';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import { Navbar, Footer } from './components';



function App() {
  return (
    <Router>
      <GlobalStyle />
      <ScrollToTop />
      <Navbar />
      <Switch>
        <Route path="/React_website" exact component={Home} />
        <Route path='/services' exact component={Services} />
        <Route path='/products' exact component={Products} />
        <Route path="/log-in" exact component={LogIn} />
        <Route path='/sign-up' exact component={SignUp} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;