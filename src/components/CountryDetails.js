import Card from 'antd/lib/card/Card';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CountriesList from './CountriesList';
import axios from 'axios';

function CountryDetails({ countries }) {
  const [fetching, setFetching] = useState(true);
  const params = useParams();
  const [countryData, setCountryData] = useState([]);

  useEffect(() => {
    axios
      .get(`https://ih-countries-api.herokuapp.com/countries/${params.id}`)
      .then((response) => {
        setCountryData(response.data);
        setFetching(false)
        console.log(response)
      });
  }, [params.id]);
  
  return (
    !fetching && 
    <>
      <Card
        title={countryData.name.official}
        extra={<a href="/">Home</a>}
        style={{
          width: 300,
        }}
      >
        <p>Capital: {countryData.capital}</p>
        <p>Area: {countryData.area} km²</p>
        <ul>
          Borders:
          <CountriesList
            countries={countries.filter((country) => {
              return countryData.borders.includes(country.alpha3Code);
            })}
          />
        </ul>
      </Card>
    </>
  );
}

export default CountryDetails;
