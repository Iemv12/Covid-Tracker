import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const fetchData=async(country)=>{
    let chageableUrl = url;

    if(country){
        chageableUrl = `${url}/countries/${country}`
    }

    try{
        const {data:{confirmed, recovered, deaths, lastUpdate}} = await axios.get(chageableUrl);

        const modifiedData = {confirmed, recovered, deaths, lastUpdate,}

        return modifiedData;
    }catch(e){
        console.log(e);
    }
}

export const fetchDailyData=async()=>{
    try {
        const {data} = await axios.get(`${url}/daily`);
        const modifiedData = data.map((dailyData)=>({
            confirmed:dailyData.confirmed.total,
            deaths:dailyData.deaths.total,
            date:dailyData.reportDate
        }));
        return modifiedData;
    } catch (e) {
        console.log(e);
    }
}

export const fetchCountryData=async()=>{
    try {
        const {data:{countries}} = await axios.get(`${url}/countries`);
        return countries.map((country)=>country.name);
    } catch (e) {
        console.log(e);
    }
}