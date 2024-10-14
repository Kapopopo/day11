function checkStatus(machine) {
  machine.then(function (result) {
    console.log(result)
    console.log("Checking status over")
  })
}


async function promiseMe(promise) {
  const result = await new Promise(function (resolve, reject) {
    resolve("I promise you to " + promise)
  })
  return result;
}

checkStatus(promiseMe("fly to the moon"))
