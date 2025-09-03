const animal =["lion" ,"tiger" ,"bear" ,"elephant"];
console.log(`summer season ${animal}`);
animal.push("panda");
animal.splice(2,2,"deer","monkey");
console.log(`winter season ${animal}`);
animal.splice(1,1,"fox");
console.log(`rainy season ${animal}`);
animal.splice(0,0,"dog");
console.log(`spring season ${animal}`);
console.log(`last animal ${animal.at(-1)}`);

