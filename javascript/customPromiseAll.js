const customPromiseAll = (promises) => {
  const results = [];
  return new Promise((resolve, reject) => {
    promises.forEach((promise) => {
      promise
        .then((res, i) => {
          results.push(res);
          if (i === promises.length - 1) {
            resolve(results);
          }
        })
        .catch((e) => reject(e));
    });
  });
};

Promise.all([Promise.resolve("Hello"), Promise.resolve("Linkedin")]);
