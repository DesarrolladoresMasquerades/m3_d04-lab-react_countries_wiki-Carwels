import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import { useState, useEffect } from 'react';
import countriesJson from "./countries.json"
import { Routes, Route } from "react-router-dom";


function App() {
  const [countries, setCountries] = useState(countriesJson)
  return (
    <div className="App">
      <Navbar />

      {countries.map((country) => {
        return(
          <div>
            <CountriesList CountriesList={country} />

            <Routes>
              <Route exact path={"/" + country.alpha3Code} element={<CountryDetails country={country} />} />
            </Routes>

          </div>
        )
      })}
    </div>
  );
}

export default App;
