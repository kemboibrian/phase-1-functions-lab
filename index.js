const scuberHq = 42;
const blockDistanceInFeet = 264;

function distanceFromHqInBlocks(someValue) {
    return Math.abs(someValue - scuberHq); 
}

console.log(distanceFromHqInBlocks(43)); 
console.log(distanceFromHqInBlocks(50)); 
console.log(distanceFromHqInBlocks(34)); 


function distanceFromHqInFeet(someValue) {
    return Math.abs(distanceFromHqInBlocks(someValue) * blockDistanceInFeet)
}

console.log(distanceFromHqInFeet(43)); 
console.log(distanceFromHqInFeet(50));
console.log(distanceFromHqInFeet(34)); 


function distanceTravelledInFeet(start, destination) {
    return Math.abs(destination - start) * blockDistanceInFeet;
}

console.log(distanceTravelledInFeet(43, 48)); 
console.log(distanceTravelledInFeet(50, 60)); 
console.log(distanceTravelledInFeet(34, 28));


function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);

    if (distance <= 400) {
        return 0;
    } else if (distance > 400 && distance <= 2000) {
        return (distance-400) * 0.02;
    } else if (distance > 2000 && distance <= 2500) {
        return 25;
    } else {
        return 'cannot travel that far';
    }
}
calculatesFarePrice()
console.log(calculatesFarePrice(43,44));
console.log(calculatesFarePrice(34,32));
console.log(calculatesFarePrice(50,58));
console.log(calculatesFarePrice(34,24));

