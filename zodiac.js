//Authors: Jiahui and Becky

var testDate = ["2016,2,29", "2017,4,1", "2017,1,1", "2017,12,31", "2014,4,12", 
                "1935,10,23", "2017,8,23", "2002,5,31", "2001,8,15", "2002,9,26"];

/* the makeDate function takes a date as a string as its argument and retuns a date object
 * converted from the date string
 */
function makeDate(str) {
    var dateObj = new Date(str);
    return dateObj;
}

/* this function obtains date information from an argument date object and returns the formatted
 * information into Day, Month/Date/Year format
 */
function formatDate(dateObj) {
    var day = dateObj.getDay(), //the day of the week
        date = dateObj.getDate(),
        month = dateObj.getMonth() + 1,
        year = dateObj.getFullYear();
    let dayName = (index) => {
        const names = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 
                        'Saturday'];
        return names[index];
    };
    var thisDate = dayName(day) + ", " + month + "/" + date + "/" + year;
    return thisDate;
}

/* the zodiacSign function takes a date object argument and returns a zodiac sign name 
 * in the form of a string
 */
function zodiacSign(dateObj){
    var date = dateObj.getDate(),
        month = dateObj.getMonth() + 1,
        zodiac = ["Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", 
                "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"];
    //Aries
    if ((month == 3 && date >= 21 && date <= 31) || 
        (month == 4 && date >= 1 && date <= 19)){
        return zodiac[0];
    }
    //Taurus
    if ((month == 4 && date >= 20 && date <= 30) || 
        (month == 5 && date >= 1 && date <= 20)){
        return zodiac[1];
    }
    //Gemini
    if ((month == 5 && date >= 21 && date <= 31) || 
        (month == 6 && date >= 1 && date <= 20)){
        return zodiac[2];
    }
    //Cancer
    if ((month == 6 && date >= 21 && date <= 31) || 
        (month == 7 && date >= 1 && date <= 22)){
        return zodiac[3];
    }
    //Leo
    if ((month == 7 && date >= 23 && date <= 31) || 
        (month == 8 && date >= 1 && date <= 22)){
        return zodiac[4];
    }
    //Virgo
    if ((month == 8 && date >= 23 && date <= 31) || 
        (month == 9 && date >= 1 && date <= 22)){
        return zodiac[5];
    }
    //Libra
    if ((month == 9 && date >= 23 && date <= 30) || 
        (month == 10 && date >= 1 && date <= 22)){
        return zodiac[6];
    }
    //Scorpio
    if ((month == 10 && date >= 23 && date <= 31) || 
        (month == 11 && date >= 1 && date <= 21)){
        return zodiac[7];
    }
    //Sagittarius
    if ((month == 11 && date >= 22 && date <= 30) || 
        (month == 12 && date >= 1 && date <= 21)){
        return zodiac[8];
    }
    //Capricorn
    if ((month == 12 && date >= 22 && date <= 31) || 
        (month == 1 && date >= 1 && date <= 19)){
        return zodiac[9];
    }
    //Aquarius
    if ((month == 1 && date >= 20 && date <= 31) || 
        (month == 2 && date >= 1 && date <= 18)){
        return zodiac[10];
    }
    //Pisces
    if ((month == 2 && date >= 19 && date <= 29) || 
        (month == 3 && date >= 1 && date <= 20)){
        return zodiac[11];
    }
}

/* the function randomElt takes an argument of an array and returns a random 
 * element from the array
 */
function randomElt(anArray) {
	var elementRand = anArray[Math.floor(Math.random()*anArray.length)];
	return elementRand;
}

/* the function getTestDate takes no arguments but instead chooses and returns 
 * a random date element from a global array of test values testDate
 */
function getTestDate(){
	return randomElt(testDate);
}

/* the function updatePage takes no arguments and executes the functions 
 * defined above, including getTestDate, makeDate, formatDate, and 
 * zodiacSign. Altogether, these functions obtain a string, converts it into 
 * a date object, and formats the date and pertaining zodiac to be added to the webpage
 * It also updates the coresponding zodiac image
 */
function updatePage(){
    //get a new date obj
    var date = makeDate(getTestDate());
    //format the date obj into a string
    var formattedDate = formatDate(date);
    //find the corresponding sign
    var newSign = zodiacSign(date);
    //find the url to the corresponding image
    var newImg = 'zodiac-images/' + newSign.toLowerCase() + '.png';
    
    //locate the locations for date, sign, and zodiac image
    var aDate = $("#aDay");
    var yourZodiac = $("#yourSign");
    var image = $("#picture");
    
    //make changes
    $(aDate).text(formattedDate);
    $(yourZodiac).text(newSign);
    $(image).attr('src', newImg);
}

//add event handler
$("#updateButton").click(updatePage);

//initilizes the page when page first load 
updatePage();

//testing functions
/* this function tests makeDate() by invoking it for every element in the test
 * arrary testDate, making every date string a date object, and printing them all
 * to the console
 */
function test_makeDate(){
    console.log(testDate.map(makeDate));
}
//invokes test_makeDate
test_makeDate();

/* this function tests formateDate() by invoking it for every date derived from 
 * testDate, converting each date object into a formatted string, and printing them all
 * to the console
 */
function test_formatDate(){
    var dateObj = testDate.map(makeDate);
    console.log(dateObj.map(formatDate));
}
//invoked test_formatDate
test_formatDate();

/* this function tests zodiacSign() by invoking it for every date derived from 
 * testDate, converting each date object into its corresponding zodiac string, and 
 * printing them all to the console
 */
function test_zodiacSign(){
    var dateObj = testDate.map(makeDate);
    console.log(dateObj.map(zodiacSign));
}
test_zodiacSign();







