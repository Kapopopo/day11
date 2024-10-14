async function promiseMe(promise) {
  let sentence = "i promise you to " + promise;
  return await new Promise(function (resolve) {
    resolve(sentence);
  });
}

promiseMe("fly to the moon").then(function (value) {
  console.log(value);
});