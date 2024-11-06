// CALLBACK HELL
function getUserWeather(userId) {
    try {
        const user = getUser(userId);
        const weather = getWeather(user.location);
        return { ...user, ...weather };
    } catch (error) {
        console.log(error.message);
        return null;
    }
}

const userWeather = getUserWeather(1);
console.log(userWeather);