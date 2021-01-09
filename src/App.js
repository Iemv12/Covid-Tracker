import {Cards, Charts, CountryPicker} from './components';
import './App.css';
import {fetchData} from './api';
import {useState, useEffect} from 'react';
import imagesCovid from './images/covid.png';

function App() {

  const [dataApi, setDataApi] = useState({});
  const [country, setCountry] = useState('');

  const api = async ()=>{
  const data = await fetchData();
  setDataApi(data);
  }

  useEffect(()=>{
    api();
  },[]);

  const handleCountryChange = async (countryData)=>{
    const data = await fetchData(countryData);
    setDataApi(data);
    setCountry(countryData);
  }

  return (
    <div className="container">
      <img className="images" src={imagesCovid} alt="Covid-19"/>
      <Cards dataApi={dataApi}/>
      <CountryPicker handleCountryChange={handleCountryChange}/>
      <Charts dataApi={dataApi} country={country}/>
    </div>
  );
}

export default App;
