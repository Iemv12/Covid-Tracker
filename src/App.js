import {Cards, Charts, CountryPicker} from './components';
import './App.css';
import {fetchData} from './api';
import {useState, useEffect} from 'react';

function App() {

  const [dataApi, setDataApi] = useState({});

  const api = async ()=>{
  const data = await fetchData();
  setDataApi(data);
  }

  useEffect(()=>{
    api();
  },[]);

  return (
    <div className="container">
      <Cards dataApi={dataApi}/>
      <CountryPicker/>
      <Charts/>
    </div>
  );
}

export default App;
