import React, {useEffect, useState} from 'react';
import {NativeSelect, FormControl} from '@material-ui/core';
import styles from './CountryPicker.module.css';
import {fetchCountryData} from '../../api';

const CountryPicker = ({handleCountryChange}) => {

    const [countriesData, setCountriesData] = useState([]);

    useEffect(() => {
        fetchContries();
    }, []);

    const fetchContries = async () =>{
        setCountriesData(await fetchCountryData());
    }

    return (
        <FormControl className={styles.FormControl}>
            <NativeSelect defaultValue="" onChange={(e)=>handleCountryChange(e.target.value)}>
                <option value="">Global</option>
                {countriesData.map((data,i)=>(
                    <option key={i+1} value={data}>{data}</option>
                ))}
            </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker
