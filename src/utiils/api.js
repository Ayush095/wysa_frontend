import axios from "axios";


const URL = "https://good-jade-reindeer-yoke.cyclic.app"

export const getContentPage = async (num, token) => {

  try {
    const response = await axios.get(`${URL}/page/${num}`, { headers: { "Authorization": `Bearer ${token}` } });
    if (response.status === 201) {
      return [true, response.data];
    }
    return [false, response.data];
  } catch (error) {
    if(error.request.status === 403){
      window.location = "/";
      alert("Your session is expired please login again");
      return [false, error];
    }
    return [false, error];
  }
};

export const postUserData = async (data) => {
  try {
    const response = await axios.post(`${URL}/user`, data);
    if (response.status === 201) {
      return [true, response.data];
    } else {
      return [false, response.data];
    }
  } catch (error) {
    return [false, error];
  }
};


export const postUserTime = async (data, token) => {
  try {
    const response = await axios.post(`${URL}/user/page/${data.num}`, data, { headers: { "Authorization": `Bearer ${token}` } });
    if (response.status === 201) {
      return [true, response.data];
    } else {
      return [false, response.data];
    }
  } catch (error) {
    if(error.request.status === 403){
      window.location = "/";
      alert("Your session is expired please login again");
      return [false, error];
    }
    return [false, error];
  }
};


