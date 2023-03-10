import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com' 



  export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {
        headers: {
        'X-RapidAPI-Key': '563556b34cmshb3741f0f2e60567p1ce75fjsn40a11c2e9283',
        'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
        }
    });

    return data;
  }