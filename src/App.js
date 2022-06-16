import axios from 'axios';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import Navbar from './components/Navbar';

const apiURL = "https://ih-countries-api.herokuapp.com/countries"

function App() {
  const [fetching, setFetching] = useState(true);
  const [countries, setCountries] = useState([])

  // useEffect(()=> {
  //   axios.get(apiURL).then((response) => {
  //     setCountries(response.data)
  //     setFetching(false)
  //   })
  // },[])

  useEffect(() => {
    const fetchData = async()=>{
      const response = await axios.get(apiURL)
      setCountries(response.data)
      setFetching(false)
    }
    fetchData()
  }, [countries]);

  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<CountriesList countries={countries} />} />
        <Route
          path="/:id"
          element={<><CountriesList countries={countries} /> <CountryDetails countries={countries} /></>}
        />
      </Routes>
    </div>
  );
}

export default App;
