const promise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, "hello");
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("world");
  }, 500);
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("🌍");
  }, 3000);
});

Promise.all([promise1, promise2, promise3]).then((results) =>
  console.log(results)
);
