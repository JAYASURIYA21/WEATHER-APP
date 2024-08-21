import axios from "axios";

export const currvalues = async (lat,lon) => {
    try {
        return axios.get(`https://api.weatherapi.com/v1/current.json?key=ecdc585da5674c7aa4460724232906&q=${lat},${lon}`)
        .then(data => data)
        .catch(error => error.message)
    } catch (error) {
        return(error.message)
    }
};

export const currcity = async (city) => {
    try {
        return axios.get(`https://api.weatherapi.com/v1/current.json?key=ecdc585da5674c7aa4460724232906&q=${city}`)
        .then(data => data)
        .catch(error => error.message)
    } catch (error) {
        return(error.message)
    }
};
