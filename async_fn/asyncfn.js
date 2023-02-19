const fn = {
  getName: (callback) => {
    const name = "Mike";
    setTimeout(() => {
      callback(name);
      //   throw new Error("server error...");
    }, 3000);
  },
  getAgeSuccess: () => {
    const age = 30;
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(age);
      }, 3000);
    });
  },
  getAgeFailure: () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject("error");
      }, 3000);
    });
  },
};

module.exports = fn;
