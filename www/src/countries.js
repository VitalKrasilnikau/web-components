var countriesHash={};

function addCountry(countryName,capitalName) {
  countriesHash[countryName]=capitalName;
}

function deleteCountry(countryName) {
  if (hasCountryInfo(countryName) == true) {
    delete countriesHash[countryName];
  }
}

function hasCountryInfo(countryName) {
  return ( countryName in countriesHash );
}

function getCountry(countryName) {
  if (hasCountryInfo(countryName))
    return countriesHash[countryName];
  else
    return null;
}