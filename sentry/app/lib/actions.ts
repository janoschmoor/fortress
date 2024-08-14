
// fetch test function
export async function fetchData() {
    //var data = fetch("https://api.open-meteo.com/v1/forecast?latitude=47.37&longitude=8.54&hourly=temperature_2m");
    var data = fetch("https://api.open-meteo.com/v1/forecast?latitude=47.37&longitude=8.54&daily=weather_code");
    return (await data).json();
}
