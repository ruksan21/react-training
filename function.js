function login(name, age, faculty) {
  console.log("Name:", name);
  console.log("Age:", age);
  console.log("Faculty:", faculty);
}
login("Ruksan", 21, "Bca");



// 
function login1(name, age, faculty) {
    const obj = {
        name: name,
        age: age,
        faculty: faculty
    };
    return obj;
}
console.log(login1("Ruksan", 21, "Bca"));
console.log( login1("John", 22, "Bca"));
console.log(login1("Alice", 23, "Bca"));
// 
function login2(name, age, faculty) {
    return {
        name,
        age,
        faculty
    };
}




