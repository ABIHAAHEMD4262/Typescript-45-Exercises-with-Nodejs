// Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value.
//  Call your function for three different cities, at least one of which is not in the default country.
 function describe_city(city: string, country: string = "Pakistan"){
    console.log(`${city} is in ${country}.`);
}

//3 cities
let city1 =describe_city("Karachi");
let city2 =describe_city("Lahore" );
let city3 =describe_city("Tokyo", "Japan");

//write a function called city_country() that takes in the name of a city and its country