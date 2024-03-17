import axios from 'axios';

export const getNews = async () => {
  try {
    let result = await axios.get(
      `https://run.mocky.io/v3/750cd11c-9982-493c-9b51-382f1a9151c1`,
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
