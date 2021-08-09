import React from 'react';

import Header from './components/Header';
import Form from './components/Form';
import Legend from './components/Legend';
import CardList from './components/CardList';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Form />
      <Legend />
      <CardList />
      <Footer />
    </div>
  );
}

export default App;
