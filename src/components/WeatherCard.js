import { useState, useEffect } from 'react';
import styled from "styled-components";


const Card = styled.div`
  color: black;
  text-align: left;
  background-color: white;
  border : #D1D5DB;
  border-radius: 10px;
  border-style: solid;
  border-width: 1px;
  width: 155px;
  height: 187px;
  box-shadow: 0px 1px 2px 0px #0000000D;
  &:hover {
    background-color: #fafafa;
    border : #9b9fac;
    border-radius: 10px;
    border-style: solid;
    border-width: 1px;

  }
},      
  
`;
const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 807px;
  justify-content: space-between;

`

function WeatherParse({ days }) {
  const weekdays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

  return (
    <>
      <Container>
      {days.map((day) => (
        <Card >
          <div style={{ padding: '17px 25px 16px 25px' }} >
            <div style={{ color: '#111827', fontSize: '16px', fontWeight:500, lineHeight: '24px', paddingBottom: '5px'}}>
              {weekdays[(new Date(day.datetime)).getDay()]}
            </div>
            <div style={{ color: '#6B7280', fontFamily: 'Inter', fontSize: '16px', fontWeight: 500, lineHeight: '24px', textAlign: 'left'}}>
              {day.tempmax}&deg; High
            </div>
            <div  style={{ color: '#6B7280', fontFamily: 'Inter', fontSize: '16px', fontWeight: 500, lineHeight: '24px', textAlign: 'left'}}>
              {day.tempmin}&deg; Low
            </div>
          </div>
          <div style= {{color: '#6B7280', fontFamily: 'Inter', fontSize: '14px', fontWeight: 400, lineHeight: '20px', textAlign: 'left', padding: '0px 25px 17px 25px'}}>
            <div style= {{width: '105px', height: '60px', overflow: 'hidden',textOverflow: 'ellipsis' }} >
                 {day.description }
            </div>
          </div>
        </Card>
      ))}
      </Container>
    </>
  )
}

const WeatherCard = ({dateRange, city}) => {
  const [weatherData, setWeatherData] = useState([]);
  const date = new Date();
  const date_start = new Date(date.getTime()); // copy date
  const date_end = new Date(date.getTime()); // copy date
  date_start.setDate(date.getDate() + dateRange);
  date_end.setDate(date.getDate() + 4 + dateRange);

  const start = date_start.toISOString().split("T")[0];
  const end = date_end.toISOString().split("T")[0];  
  
  useEffect(() => {
    fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/${start}/${end}?key=7PCYRZ5NLP3UT8RX39YGEFEQJ`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/${start}/${end}?key=7PCYRZ5NLP3UT8RX39YGEFEQJ`);
        setWeatherData(data.days);
      });
  }, [start, end, city]);
  return (
    <WeatherParse days = {weatherData}/>
  );
};

export default WeatherCard;
