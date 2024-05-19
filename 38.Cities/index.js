function describe_city(city, country) {
    if (country === void 0) { country = "Pakistan"; }
    console.log("".concat(city, " is in ").concat(country, "."));
}
//3 cities
var city1 = describe_city("Karachi");
var city2 = describe_city("Lahore");
var city3 = describe_city("Tokyo", "Japan");
