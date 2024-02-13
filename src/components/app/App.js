import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MaintenancePage from '../maintenance/MaintenancePage';
import CheckoutPage from '../checkout-page/CheckoutPage';
import ConfirmationPage from '../confirmation-page/ConfirmationPage';
import Header from '../header/Header';
import ProductPage from '../product-page/ProductPage';
import Footer from '../footer/footer';

/**
 * @name App
 * @returns component
 */
const App = () => (
  <BrowserRouter>
    <div className="content">
      <Header />
      <Switch>
        <Route exact path="/" render={() => <ProductPage />} />
        <Route exact path="/checkout" render={() => <CheckoutPage />} />
        <Route exact path="/confirmation" render={() => <ConfirmationPage />} />
        <Route exact path="/maintenance" render={() => <MaintenancePage />} />
      </Switch>
    </div>
    <Footer />
  </BrowserRouter>
);

export default App;
