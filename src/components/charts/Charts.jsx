import React, { useState, useEffect } from 'react';
import { fetchDailyData } from '../../api';
import { Line, Bar } from 'react-chartjs-2';
import styles from './Charts.module.css';

const Charts = ({dataApi:{confirmed, recovered, deaths}, country}) => {

    const [dailyData, setDailyData] = useState([]);

    useEffect(() => {
        fetchApi();
    }, []);

    const fetchApi = async () => {
        setDailyData(await fetchDailyData());
    };


    console.log({confirmed, recovered, deaths});

    const lineChart = (
        dailyData.length
            ? (
                <Line
                    data={{
                        labels: dailyData.map(({date})=>date),
                        datasets: [{
                            data:dailyData.map(({confirmed})=>confirmed),
                            label:"Confirmed",
                            borderColor:"#3333ff",
                            fill:true
                        }, {
                            data:dailyData.map(({deaths})=>deaths),
                            label:"Deaths",
                            borderColor:"red",
                            backgroundColor:"rgba(255, 0, 0, 0.5)",
                            fill:true
                        }],
                    }}
                />
            )
            : (
                null
            )
    );

    const barChar = (
        confirmed
        ?(
            <Bar
                data={{
                    labels:['Infect','Recovered','Death'],
                    datasets:[{
                        label:'People',
                        backgroundColor:["rgba(0, 0, 255, 0.5)","rgba(81, 189, 81, 0.5)", "rgba(255, 0, 0, 0.5)"],
                        data:[confirmed.value, recovered.value, deaths.value]
                    }],
                }}
                options={{
                    legend:{display:false},
                    title:{display:true,text:`Current state in ${country}`}
                }}
            />
        )
        :(
            null
        )
    )

    return (
        <div className={styles.container}>
            {country?barChar:lineChart}
        </div>
    )
}

export default Charts
