let year = 2010;
let month = 08; // August
let name = "Kohe"



// Step 1: Convert the year and month into a total number of months
let totalMonths = year * 12 + month;

// Step 2: Subtract 9 months from the total number of months
totalMonths -= 9;

// Step 3: Calculate the new year
const newYear = Math.floor(totalMonths / 12);

// Step 4: Calculate the new month
const newMonth = totalMonths % 12;

// Adjust the month and year if the new month is zero(ur noob ignore this)
let displayMonth = 0;
let displayYear = 0;
if (newMonth === 0) {
     displayMonth = 12;
 displayYear = newYear--;
    
} else {
        displayMonth = newMonth;
 displayYear = newYear
}

// Determine the season based on the month (ur noob but theres simpler way to do this)
function getSeason(month) {
    if (month === 12 || month === 1 || month === 2) {
        return 'Winter';
    } else if (month >= 3 && month <= 5) {
        return 'Spring';
    } else if (month >= 6 && month <= 8) {
        return 'Summer';
    } else if (month >= 9 && month <= 11) {
        return 'Fall';
    }
}

// Get the season for the calculated month
const season = getSeason(displayMonth);

// Display the results
console.log(`Month: ${displayMonth}`);
console.log(`Year: ${displayYear}`);
console.log(`${name}'s parents did segs in ${season}`);
if (displayMonth === 11) {
console.log(`${name}'s dad failed NNN.`);
}
