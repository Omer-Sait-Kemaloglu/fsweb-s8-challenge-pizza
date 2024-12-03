import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Banner from './components/Banner';
import OrderForm from './components/OrderForm';

const App = () => {
  const [orderDetails, setOrderDetails] = useState(null);

  const handleOrderSubmit = (orderData) => {
    setOrderDetails(orderData);
  };

  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Banner} />
        <Route path="/order">
          <OrderForm onSubmit={handleOrderSubmit} />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
