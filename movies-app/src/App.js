import CounterWrapper from './components/purecomponent/CounterWrapper';
import React from 'react';
import { SearchForm } from './components/functionalComponent/searchForm';
import './App.css';

function App() {
  return (
    <React.Fragment>
      <div className="App">
        Hello World
      </div>
      <CounterWrapper/>
      <SearchForm/>
    </React.Fragment>
  );
}

export default App;
