const fn = {
  add: (num1, num2) => num1 + num2,
  connectUserDB: () => {
    return new Promise((res, rej) => {
      setTimeout(() => {
        res({
          name: "Mike",
          age: 30,
          gender: "male",
        });
      }, 500);
    });
  },

  disconnectUserDB: () => {
    return new Promise((res, rej) => {
      setTimeout(() => {
        res("disconnect success");
      }, 500);
    });
  },

  connectCarDB: () => {
    return new Promise((res, rej) => {
      setTimeout(() => {
        res({
          brand: "bmw",
          name: "z4",
          color: "red",
        });
      }, 500);
    });
  },

  disconnectCarDB: () => {
    return new Promise((res, rej) => {
      setTimeout(() => {
        res("disconnect success");
      }, 500);
    });
  },
};

module.exports = fn;
