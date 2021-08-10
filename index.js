const hq = 42;
const feet = 264

function distanceFromHqInBlocks(num) {
        return Math.abs(hq - num)
    }

function distanceFromHqInFeet(num) {
    let blocks = distanceFromHqInBlocks(num);
    return blocks * 264;
}

function distanceTravelledInFeet(a, b) { 
        return Math.abs(a-b) * 264;
}

function calculatesFarePrice(start, destination) {
    let distance = distanceTravelledInFeet(start, destination);
    if (distance <= 400) {
        return 0
    }
    else if (distance <= 2000) {
        return (distance - 400) * .02
    }
    else if (distance < 2500) {
        return 25
    }
    else if (distance > 2500) {
        return "cannot travel that far"
    }
}
