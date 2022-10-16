let models = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r\|   ']
let timeout = 0
for (let item of models) {
  setTimeout(() => {
    process.stdout.write(item)
  }, timeout)
  timeout += 200
} setTimeout(() => {
  console.log()
}, timeout)
// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 100);

// setTimeout(() => {
//   process.stdout.write('\r/   ');
// }, 300);

// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, 500);

// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.
//   process.stdout.write('\r\\   '); 
// }, 700);

// setTimeout(() => {
//   process.stdout.write('\r|   '); 
// }, 900);

// setTimeout(() => {
//   process.stdout.write('\r/   ');
// }, 1100);

// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, 1300);

// setTimeout(() => {
//   process.stdout.write('\r\\   ');
// }, 1500);

// setTimeout(() => {
//   process.stdout.write('\r\|   '); 
// }, 1700);
// setTimeout(() => {
//   console.log(); 
// }, 1701);

