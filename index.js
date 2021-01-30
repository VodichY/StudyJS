setTimeout(() => console.log("timeout"), 0); 4
setImmediate(() => console.log("immediate")); 5
Promise.resolve().then(() => console.log("promise")); 3
process.nextTick(() => console.log("nextTick")); 2
console.log("log"); 1
process.nextTick(() => console.log("nextTick1")); 2
