import axios from "axios";

export const getStatistics = async (parameter?: string) => {
  const request_url = `https://disease.sh/v3/covid-19/${parameter || "all"}`;

  try {
    const response = await axios.get(request_url);

    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getHistorical = async (parameter?: string) => {
  const request_url = `https://disease.sh/v3/covid-19/historical/${
    parameter || "all"
  }?lastdays=270`;

  try {
    const response = await axios.get(request_url);

    return response.data;
  } catch (error) {
    throw error;
  }
};
