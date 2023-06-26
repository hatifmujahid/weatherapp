import axios from "axios";
import React, { useState } from "react";
import { TextField } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import WeatherData from "./searchLocationWeather";

const countries = [
  { label: "Afghanistan" },
  { label: "Albania" },
  { label: "Algeria" },
  { label: "Andorra" },
  { label: "Angola" },
  { label: "Anguilla" },
  { label: "Antigua & Barbuda" },
  { label: "Argentina" },
  { label: "Armenia" },
  { label: "Australia" },
  { label: "Austria" },
  { label: "Azerbaijan" },
  { label: "Bahamas" },
  { label: "Bahrain" },
  { label: "Bangladesh" },
  { label: "Barbados" },
  { label: "Belarus" },
  { label: "Belgium" },
  { label: "Belize" },
  { label: "Benin" },
  { label: "Bermuda" },
  { label: "Bhutan" },
  { label: "Bolivia" },
  { label: "Bosnia & Herzegovina" },
  { label: "Botswana" },
  { label: "Brazil" },
  { label: "Brunei Darussalam" },
  { label: "Bulgaria" },
  { label: "Burkina Faso" },
  { label: "Burundi" },
  { label: "Cambodia" },
  { label: "Cameroon" },
  { label: "Canada" },
  { label: "Cape Verde" },
  { label: "Cayman Islands" },
  { label: "Central African Republic" },
  { label: "Chad" },
  { label: "Chile" },
  { label: "China" },
  { label: "Colombia" },
  { label: "Comoros" },
  { label: "Congo (DRC)" },
  { label: "Congo (Republic)" },
  { label: "Cook Islands" },
  { label: "Costa Rica" },
  { label: "Croatia" },
  { label: "Cuba" },
  { label: "Cyprus" },
  { label: "Czech Republic" },
  { label: "Denmark" },
  { label: "Djibouti" },
  { label: "Dominica" },
  { label: "Dominican Republic" },
  { label: "East Timor" },
  { label: "Ecuador" },
  { label: "Egypt" },
  { label: "El Salvador" },
  { label: "Equatorial Guinea" },
  { label: "Eritrea" },
  { label: "Estonia" },
  { label: "Ethiopia" },
  { label: "Fiji" },
  { label: "Finland" },
  { label: "France" },
  { label: "Gabon" },
  { label: "Gambia" },
  { label: "Georgia" },
  { label: "Germany" },
  { label: "Ghana" },
  { label: "Greece" },
  { label: "Grenada" },
  { label: "Guatemala" },
  { label: "Guinea" },
  { label: "Guinea-Bissau" },
  { label: "Guyana" },
  { label: "Haiti" },
  { label: "Honduras" },
  { label: "Hungary" },
  { label: "Iceland" },
  { label: "India" },
  { label: "Indonesia" },
  { label: "Iran" },
  { label: "Iraq" },
  { label: "Ireland" },
  { label: "Israel" },
  { label: "Italy" },
  { label: "Jamaica" },
  { label: "Japan" },
  { label: "Jordan" },
  { label: "Kazakhstan" },
  { label: "Kenya" },
  { label: "Kiribati" },
  { label: "Korea (North)" },
  { label: "Korea (South)" },
  { label: "Kosovo" },
  { label: "Kuwait" },
  { label: "Kyrgyzstan" },
  { label: "Laos" },
  { label: "Latvia" },
  { label: "Lebanon" },
  { label: "Lesotho" },
  { label: "Liberia" },
  { label: "Libya" },
  { label: "Liechtenstein" },
  { label: "Lithuania" },
  { label: "Luxembourg" },
  { label: "Macedonia (North Macedonia)" },
  { label: "Madagascar" },
  { label: "Malawi" },
  { label: "Malaysia" },
  { label: "Maldives" },
  { label: "Mali" },
  { label: "Malta" },
  { label: "Marshall Islands" },
  { label: "Mauritania" },
  { label: "Mauritius" },
  { label: "Mexico" },
  { label: "Micronesia" },
  { label: "Moldova" },
  { label: "Monaco" },
  { label: "Mongolia" },
  { label: "Montenegro" },
  { label: "Morocco" },
  { label: "Mozambique" },
  { label: "Myanmar" },
  { label: "Namibia" },
  { label: "Nauru" },
  { label: "Nepal" },
  { label: "Netherlands" },
  { label: "New Zealand" },
  { label: "Nicaragua" },
  { label: "Niger" },
  { label: "Nigeria" },
  { label: "Norway" },
  { label: "Oman" },
  { label: "Pakistan" },
  { label: "Palau" },
  { label: "Panama" },
  { label: "Papua New Guinea" },
  { label: "Paraguay" },
  { label: "Peru" },
  { label: "Philippines" },
  { label: "Poland" },
  { label: "Portugal" },
  { label: "Qatar" },
  { label: "Romania" },
  { label: "Russia" },
  { label: "Rwanda" },
  { label: "Saint Kitts & Nevis" },
  { label: "Saint Lucia" },
  { label: "Saint Vincent & the Grenadines" },
  { label: "Samoa" },
  { label: "San Marino" },
  { label: "Sao Tome & Principe" },
  { label: "Saudi Arabia" },
  { label: "Senegal" },
  { label: "Serbia" },
  { label: "Seychelles" },
  { label: "Sierra Leone" },
  { label: "Singapore" },
  { label: "Slovakia" },
  { label: "Slovenia" },
  { label: "Solomon Islands" },
  { label: "Somalia" },
  { label: "South Africa" },
  { label: "South Sudan" },
  { label: "Spain" },
  { label: "Sri Lanka" },
  { label: "Sudan" },
  { label: "Suriname" },
  { label: "Swaziland" },
  { label: "Sweden" },
  { label: "Switzerland" },
  { label: "Syria" },
  { label: "Taiwan" },
  { label: "Tajikistan" },
  { label: "Tanzania" },
  { label: "Thailand" },
  { label: "Togo" },
  { label: "Tonga" },
  { label: "Trinidad & Tobago" },
  { label: "Tunisia" },
  { label: "Turkey" },
  { label: "Turkmenistan" },
  { label: "Turks & Caicos Islands" },
  { label: "Tuvalu" },
  { label: "Uganda" },
  { label: "Ukraine" },
  { label: "United Arab Emirates" },
  { label: "United Kingdom" },
  { label: "United States" },
  { label: "Uruguay" },
  { label: "Uzbekistan" },
  { label: "Vanuatu" },
  { label: "Vatican City" },
  { label: "Venezuela" },
  { label: "Vietnam" },
  { label: "Yemen" },
  { label: "Zambia" },
  { label: "Zimbabwe" }
];

export default function Search() {
  const [cities, setCities] = useState([]);
  const [country, setCountry] = useState(null);
  const [city, setCity] = useState(null);

  const handleCountryChange = (event, value) => {
    setCountry(value ? value.label : null);

    if(value){
      const response = axios.post("https://countriesnow.space/api/v0.1/countries/cities", {
        country: value.label
      }).then((response) => {
          console.log(response.data.data);
          setCities(response.data.data);
        }
      );
    }
  };
  const handleCityChange = (event, value) => {
    setCity(value );
  };

  return (
    <div style={{ display: "flex", margin: "10px", flexDirection:'column'}}>
      <Autocomplete
        disablePortal
        id="grouped-demo"
        options={countries}
        sx={{ width: 300 }}
        onChange={handleCountryChange}
        renderInput={(params) => <TextField {...params} label="Input Country" />}
      />
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={cities}
        sx={{ width: 300, marginTop: "10px"}}
        onChange={handleCityChange}
        renderInput={(params) => <TextField {...params} label="Input City" />}
      />
        {city? <WeatherData city={city} />: null}
    </div>
  );
}
