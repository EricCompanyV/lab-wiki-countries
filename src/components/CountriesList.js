import { Link } from 'react-router-dom';

function CountriesList({ countries }) {
  return (
    <>
      {countries.map((country) => {
        return (
          <li key={country.alpha3Code}>
          <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt="country flag" />
            <Link to={`/${country.alpha3Code}`}>{country.name.common}</Link>
          </li>
        );
      })}
    </>
  );
}

export default CountriesList;
