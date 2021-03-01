import { Country, Province, WorldWide } from "../types";

export function locationToFeature(location: any) {
  return {
    type: "Feature",
    properties: {
      ...location,
    },
    geometry: {
      type: "Point",
      coordinates: [
        +location.coordinates.longitude,
        +location.coordinates.latitude,
      ],
    },
  };
}

export function featuresToGeoJSON(featuresObject: any) {
  const geoJsonArray = Object.values(featuresObject).map((feature) =>
    locationToFeature(feature)
  );

  return {
    type: "FeatureCollection",
    features: geoJsonArray,
  };
}

export function commify(value: number) {
  let numberString: string | string[] = String(value);

  numberString = numberString.split("").reverse();

  numberString = numberString.reduce((prev, next, index) => {
    let shouldComma = (index + 1) % 3 === 0 && index + 1 < numberString.length;

    let updatedValue = `${prev}${next}`;

    if (shouldComma) {
      updatedValue = `${updatedValue},`;
    }

    return updatedValue;
  }, "");

  numberString = numberString.split("").reverse().join("");

  return numberString;
}

export function customCountryPayload(payload: Country[]) {
  return payload.reduce((prev, next) => {
    //Since we get data from different api's, I decided to use the format of one api response
    const {
      countryInfo: { lat, long, flag },
    } = next;

    //Creating the custom payload to match the response of only one api.
    const customPayload = {
      country: next.country,
      active: next.active,
      tests: next.tests,
      flag,
      stats: {
        deaths: next.deaths,
        recovered: next.recovered,
        confirmed: next.cases,
        todayCases: next.todayCases,
        todayDeaths: next.todayDeaths,
        todayRecovered: next.todayRecovered,
      },
      coordinates: { latitude: lat, longitude: long },
    };

    return {
      ...prev,
      [next.country]: customPayload,
    };
  }, {});
}

export function iconSizeByCases(value: number) {
  if (value <= 1000) {
    return [4, 4];
  }
  if (value > 1000 && value <= 10000) {
    return [6, 6];
  }
  if (value > 10000 && value <= 50000) {
    return [8, 8];
  }
  if (value > 50000 && value <= 300000) {
    return [10, 10];
  }
  if (value > 300000 && value <= 2000000) {
    return [12, 12];
  }
  if (value > 2000000 && value <= 5000000) {
    return [14, 14];
  }
  return [16, 16];
}

export function iconSizeByPercentage(value: number) {
  if (value <= 1.5) {
    return [4, 4];
  }
  if (value > 1.5 && value <= 3) {
    return [6, 6];
  }
  if (value > 3 && value <= 4.5) {
    return [8, 8];
  }
  if (value > 4.5 && value <= 8) {
    return [10, 10];
  }
  if (value > 8 && value <= 12.5) {
    return [12, 12];
  }
  if (value > 12.5 && value <= 16) {
    return [14, 14];
  }
  return [16, 16];
}

export function setTargetData(
  worldwide: WorldWide,
  countries: Record<string, Province>,
  targetData: string
) {
  let targetCountry = countries[targetData];

  const { affectedCountries, updated } = worldwide;
  let customWorldwide;

  if (targetCountry) {
    let stats = targetCountry.stats;

    customWorldwide = {
      active: targetCountry.active,
      cases: stats.confirmed,
      deaths: stats.deaths,
      recovered: stats.recovered,
      todayCases: stats.todayCases,
      todayDeaths: stats.todayDeaths,
      todayRecovered: stats.todayRecovered,
      updated,
      affectedCountries,
    };
  }

  if (targetData === "Global") {
    customWorldwide = worldwide;
  }

  return customWorldwide as WorldWide;
}

export function getSearchResults(
  countries: Record<string, Province>,
  searchTerm: string
) {
  const countriesArray = Object.values(countries);

  return countriesArray.filter(({ country }) => {
    if (searchTerm === "") {
      return null;
    }

    return country.toLowerCase().startsWith(searchTerm.toLowerCase());
  });
}
