

//problem 1 
function calculateTax(income, expenses) {

    if(income < 0 || expenses < 0 || expenses > income){
        return "Invalid Input";
    }
     else {
        const remainAmount = income - expenses;
        const tax = remainAmount * 0.2;
        return tax;
     }
}
//problem 2 
function sendNotification(email) {
    if(typeof email !== "string"){
        return  "Invalid Input";
    }
    if(!email.includes("@")){
        return "Invalid Email"
    }
    const separate = email.split("@");
    const userName = separate[0];
    const domainName = separate[1];
    const notificationMessage = `${userName} sent you an email from ${domainName}`;
}
//problem 3 
function checkDigitsInName(name) {
    if(typeof name !== "string") {
        return "Invalid Input";
    }
    for(const caracter of name){
        if(!isNaN(caracter) && caracter !== " "){
            return true
        }
    }
    return false;
}
//problem 4 
function calculateFinalScore(obj) {
    if(!obj || typeof (obj.name) !== "string" || 
        typeof(obj.testScore ) !== "number" || typeof(obj.schoolGrade) !== "number" ||
        typeof(obj.isFFamily) !== "boolean" || obj.testScore > 50 || obj.schoolGrade > 30) {

        return "Invalid Input";
    }
    let totalScore = obj.testScore + obj.schoolGrade;
    if(obj.isFFamily){
        totalScore += 20;
    }
    return totalScore >= 80 ? true: false;
}
//problem 5 
function  waitingTime(waitingTimes  , serialNumber) {
    if(!Array.isArray(waitingTimes) || typeof serialNumber !== 'number' || serialNumber <= 0) {
        return "Invalid Input";
    }
    let totalTime = 0;
    for(const avrg of waitingTimes){
        totalTime += avrg;
    }
    const average = totalTime / waitingTimes.length;
    const round = Math.round(average);

    if(serialNumber > waitingTimes.length){
        let remainingCandidate = serialNumber - waitingTimes.length;
        let withoutIsrat = remainingCandidate - 1;
        let remainingTimes = round * withoutIsrat;
        return remainingTimes;
    }
    else{
        return "Israt already gone";
    }
}
