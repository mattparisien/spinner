const arr = ['\r|   ','\r/   ', '\r-   ','\r\\   ','\r|   ','\r/   ','\r-   ','\r\\  ','\r|  '];
let counter = 0;
arr.forEach(val => {
  counter+=200
  setTimeout(() => {
    process.stdout.write(val)
  }, counter)
});