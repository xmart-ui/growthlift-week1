let name = "Usman";
const site = "GrowthLift";
let isOnline = true;
let skills = ["HTML", "CSS", "JavaScript"];

function greet(name) {
    return `Hello ${name}`;
}

console.log(greet(name));

skills.forEach(skill => console.log(skill));

if (isOnline) {
    console.log("User is online");
} else {
    console.log("Offline");
}

console.log(`Welcome to ${site}, ${name}!`);