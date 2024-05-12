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
      `https://run.mocky.io/v3/83b4d0d4-55e8-4526-802e-a49777cf50fc`,
    );

    if (result) {
      return result;
    }
  } catch (error) {
    console.log(error);
  }
};
