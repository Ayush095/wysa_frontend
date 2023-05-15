import axios from "axios";

const URL = "https://good-jade-reindeer-yoke.cyclic.app"

export const getContentPage = async (num) => {
  try {
    const response = await axios.get(`${URL}/page/${num}`);
    console.log(response);
    if (response.status === 201) {
      return [true, response.data];
    }
    return [false, response.data];
  } catch (error) {
    return [false, error];
  }
};

export const postUserData = async (data) => {
  try {
    const response = await axios.post(`${URL}/user`, data);
    console.log(response);
    if (response.status === 201) {
      return [true, response.data];
    } else {
      return [false, response.data];
    }
  } catch (error) {
    return [false, error];
  }
};


export const postUserTime = async (data) => {
  console.log(data);
  try {
    const response = await axios.post(`${URL}/user/page/${data.num}`, data);
    console.log(response);
    if (response.status === 201) {
      return [true, response.data];
    } else {
      return [false, response.data];
    }
  } catch (error) {
    return [false, error];
  }
};


