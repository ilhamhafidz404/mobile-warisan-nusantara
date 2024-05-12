import axios from 'axios';

export const getNews = async () => {
  try {
    let result = await axios.get(
      `https://run.mocky.io/v3/4c3c6a2c-0d34-4b7d-8b13-bfe49edbf51f`,
    );

    if (result) {
      return result;
    }
  } catch (error) {
    console.log(error);
  }
};

export const getNewsById = async () => {
  try {
    let result = await axios.get(
      `https://run.mocky.io/v3/2989b64f-ea7c-43bb-b1d5-986d2de4128a`,
    );

    if (result) {
      return result;
    }
  } catch (error) {
    console.log(error);
  }
};
