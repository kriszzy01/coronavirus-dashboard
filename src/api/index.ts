import axios from "axios";

export const getProvince = async () => {
  const request_url = "https://disease.sh/v3/covid-19/jhucsse";

  try {
    const response = await axios.get(request_url);

    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getCountries = async () => {
  const request_url = "https://disease.sh/v3/covid-19/countries";

  try {
    const response = await axios.get(request_url);

    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getWorldWide = async () => {
  const request_url = "https://disease.sh/v3/covid-19/all";

  try {
    const response = await axios.get(request_url);

    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getAllHistorical = async () => {
  const request_url = "https://disease.sh/v3/covid-19/historical/all?lastdays=360";

  try {
    const response = await axios.get(request_url);

    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getHistoricalData = async () => {};
