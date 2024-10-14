async function checkFuel(fuel) {
  return await new Promise(function (resolve, reject) {
    let text = "Ready to launch";
    let lol = "Please refill fuel";

    if (fuel >= 9) {
      resolve(text);
    } else {
      reject(lol);
    }
  });
}

checkFuel(2).then(function (resolve) {
  console.log(resolve)
}).catch(function (reject) {
  console.log(reject);
});