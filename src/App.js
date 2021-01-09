import {Cards, Charts, CountryPicker} from './components';
import './App.css';
import {fetchData} from './api';
import {useState, useEffect} from 'react';

function App() {

  const api = async ()=>{
  const data = await fetchData();
  console.log(data);
  }

  useEffect(()=>{
    api();
  },[]);

  return (
    <div className="container">
      <Cards/>
      <Charts/>
      <CountryPicker/>
    </div>
  );
}

export default App;
