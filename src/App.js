import React from 'react';
import './style.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Basics from './components/Basics';
import Types from './components/Types';
import Equipment from './components/Equipment';
import Safety from './components/Safety';
import Where from './components/Where';
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';

export default function App() {
  return (
    <div id="wrapper">
      <Header />
      <BrowserRouter>
        <div>
          <Sidebar />
          <Switch>
            <Route exact path="/" component={Basics} />
            <Route path="/types" component={Types} />
            <Route path="/equipment" component={Equipment} />
            <Route path="/safety" component={Safety} />
            <Route path="/Where" component={Where} />
          </Switch>
        </div>
      </BrowserRouter>
      <Footer />
    </div>
  );
}
