import axios from 'axios';

export const getTari = async () => {
  try {
    let result = await axios.get(
      ` https://run.mocky.io/v3/8ed1dbf1-d4c5-4283-9c93-89558ef33131`,
    );

    if (result) {
      return result;
    }
  } catch (error) {
    console.log(error);
  }
};
