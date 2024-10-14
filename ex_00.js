async function asyncFunc() {
  return await new Promise(function (resolve) {
    resolve("Hello World");
  });
}

asyncFunc().then(function (result) {
  console.log(result);
});
