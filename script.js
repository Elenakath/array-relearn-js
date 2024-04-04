var hobbies = [
    "coding", 
    "bread making", 
    "Jersey shore", 
    "walking", 
    "workingout", 
    "learing"];
//console.log(hobbies.length);
hobbies.push("family time");
//console.log(hobbies[2]);
hobbies.pop();
hobbies.splice(2, 0, "movies", "garden");
hobbies.shift();
hobbies.unshift("lego");
console.log(hobbies);

var goals = ["get a job", "disney", "new house"];
var allTheThings = hobbies.concat(goals);

console.log(allTheThings);
console.log(allTheThings.indexOf("disney"));
allTheThings.splice(9, 1);
console.log(allTheThings);

var plans = allTheThings.map(function (item) {
    return `I can't wait to ${item}!!`;
});
console.log(plans);