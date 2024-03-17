import axios from 'axios';

export const getEvent = async () => {
  try {
    let result = await axios.get(
      `https://run.mocky.io/v3/cc2b0447-c60e-4b99-b91d-82bcc52a2faf`,
    );

    if (result) {
      return result;
    }
  } catch (error) {
    console.log(error);
  }
};
