import axios from 'axios';

export const getEvent = async () => {
  try {
    let result = await axios.get(`http://127.0.0.1:8000/api/event?limit=3`);

    if (result) {
      return result;
    }
  } catch (error) {
    console.log(error);
  }
};
