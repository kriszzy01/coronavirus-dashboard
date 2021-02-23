import { Country } from "../types";

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

export function featuresToGeoJSON(featuresArray: any) {
  return {
    type: "FeatureCollection",
    features: featuresArray,
  };
}

export function featuresToGeoJsonArray(featuresObject: any) {
  //Converts an object tp an array of geoJSON features
  return Object.values(featuresObject).map((feature) =>
    locationToFeature(feature)
  );
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
      cases,
      recovered,
      deaths,
      country,
      tests,
      active,
    } = next;

    //Creating the custom payload to match the response of only one api.
    const customPayload = {
      country,
      active,
      tests,
      flag,
      stats: { deaths, recovered, confirmed: cases },
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
