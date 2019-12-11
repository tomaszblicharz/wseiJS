class WeatherForecast {
    constructor(city) {
        this.apiKey = '50d53005c0fd5f556bb4ef15224c4209'
        this.apiURL = `http://api.openweathermap.org/data/2.5/weather?q=Cracow&units=metric&APPID=${this.apiKey}`
        this.cities = {}
        if (city) {
            this.getForecast(city)
                .then(forecast => {
                    this.cities[city] = forecast
                })
        }
    }

    getCityData(city) {
        return this.cities[city]
    }

    getForecast(city) {
        return fetch(this.apiURL)
            .then(data => data.json())
            .then(data => {
                return {
                    temp: data.main.temp,
                    humidity: data.main.humidity
                }
            })
    }
}