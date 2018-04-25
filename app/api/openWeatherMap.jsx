var axios = require('axios');

const OPEN_WEATHER_MAP_URL_PREFIX = 'http://api.openweathermap.org/data/2.5/weather?';
const OPEN_WEATHER_MAP_URL_SUFFIX = '&units=metric&appid=869204aab04b69c1160a42f4308c232f';

module.exports = {
    getTemp: function (location) {
        var encodedLocation = encodeURIComponent(location);
        var requestUrl = `${OPEN_WEATHER_MAP_URL_PREFIX}q=${encodedLocation}${OPEN_WEATHER_MAP_URL_SUFFIX}`;

        return axios.get(requestUrl).then(function (res) {
            if (res.data.cod && res.data.message) {
                throw new Error(res.data.message);
            } else {
                return res.data.main.temp;
            }
        }, function (res) {
            throw new Error(res.data.message);
        });
    }
}