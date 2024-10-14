function initializeMachine(machineName, timeRequired) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(machineName + " initialized");
    }, timeRequired * 1000);
  });
}

initializeMachine("Computer", 3).then(value => {
  console.log(value);
});
