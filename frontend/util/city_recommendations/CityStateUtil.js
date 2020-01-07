import cities from './cities.json'

export default class CityStateUtil {
    constructor() {
        this.cityNames = Object.keys(cities);
    }

    getCities (num=5) {
        return this.cityNames.slice(0, num);
    }
    searchByCity(cityName, num = 5){
        return this.cityNames.filter(name => RegExp(`^.*${cityName}.*`, "i").test(name)).slice(0, num);
    }
    getCityInfo(cityName){
        return cities[cityName];
    }
} 