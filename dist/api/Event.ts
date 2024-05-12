import axios from 'axios';

export const getEvent = async () => {
  try {
    let result = await axios.get(
      `https://run.mocky.io/v3/ef8d6c1f-7dc3-4feb-86df-d284ef999db7`,
    );

    if (result) {
      return result;
    }
  } catch (error) {
    console.log(error);
  }
};
