(async () => {
  let seconds = 3;

  const printOutArgs = arr => {
    /*eslint-disable*/
    console.log(...arr);
    /*eslint-enable*/
  };

  const doTheCountdown = async () =>
    new Promise(resolve =>
      setTimeout(() => {
        resolve();
      }, 1000 * seconds)
    );

  await doTheCountdown();
  
  printOutArgs('We have LIFTOFF!');
}());
